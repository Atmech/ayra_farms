import { NextResponse } from "next/server";
import { Resend } from "resend";
import { checkConflicts, createBookingEvent, BookingData } from "@/lib/calendar";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const OWNER_EMAIL = process.env.SMTP_USER || "info@theayrafarm.com";
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

function generateIcs(data: BookingData) {
  const formattedSpace = data.space.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const uid = `${Date.now()}-${Math.random().toString(36).slice(2)}@theayrafarm.com`;

  // Format: YYYYMMDDT120000 (12pm local time)
  const dtStart = `${data.checkIn.replace(/-/g, '')}T120000`;
  const dtEnd = `${data.checkOut.replace(/-/g, '')}T120000`;

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Ayra Farms//Booking//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
UID:${uid}
SUMMARY:Stay at Ayra Farms — ${formattedSpace}
DTSTART;TZID=Asia/Kolkata:${dtStart}
DTEND;TZID=Asia/Kolkata:${dtEnd}
DESCRIPTION:Your booking inquiry for ${formattedSpace} at Ayra Farms. We will confirm availability within 24 hours.
LOCATION:Ayra Farms\, Dapoli\, Ratnagiri\, Maharashtra\, India
ORGANIZER;CN=Ayra Farms:mailto:info@theayrafarm.com
ATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;CN=${data.name}:mailto:${data.email}
STATUS:TENTATIVE
END:VEVENT
END:VCALENDAR`;
}

export async function POST(request: Request) {
  try {
    const body: BookingData = await request.json();
    const { name, email, checkIn, checkOut, space, adults, children, pets, phone, notes } = body;

    if (!name || !email || !checkIn || !checkOut || !space) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
        return NextResponse.json(
            { success: false, message: "Check-out date must be after check-in date." },
            { status: 400 }
        );
    }

    if (!CALENDAR_ID) {
        console.log("No Google Calendar ID provided. Demo Mode.");
    } else {
        const hasConflict = await checkConflicts(CALENDAR_ID, checkIn, checkOut, space);
        if (hasConflict) {
             return NextResponse.json(
                { success: false, message: "These dates are already booked for the selected space. Please try different dates." },
                { status: 409 }
             );
        }
        await createBookingEvent(CALENDAR_ID, body);
    }

    if (!RESEND_API_KEY || RESEND_API_KEY === "re_xxxxxxxxxxxx") {
      console.log("📮 New Booking Inquiry (Demo Mode - No Resend API key):", body);
      return NextResponse.json({
        success: true,
        message: "Inquiry received! (Demo mode)",
      });
    }

    const resend = new Resend(RESEND_API_KEY);
    const formattedSpace = space.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    // Email 1: Owner Notification
    await resend.emails.send({
      from: `Ayra Farms Website <info@theayrafarm.com>`,
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `🏡 New Lead: ${name} — ${formattedSpace} — ${checkIn} to ${checkOut}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #FDFBF7; border: 1px solid #E6E2D6;">
          <h1 style="font-style: italic; color: #2c3e50; border-bottom: 2px solid #C07A58; padding-bottom: 10px;">
            Booking Inquiry Received
          </h1>
          <table style="width: 100%; font-size: 16px; color: #2c3e50; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; font-weight: bold; width: 35%;">Guest Name:</td><td>${name}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: bold;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; font-weight: bold;">Phone:</td><td>${phone || "Not provided"}</td></tr>
            <tr style="border-top: 1px dashed #ccc;"><td style="padding: 10px 0; font-weight: bold;">Accommodation:</td><td>${formattedSpace}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: bold;">Check-In:</td><td>${checkIn}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: bold;">Check-Out:</td><td>${checkOut}</td></tr>
            <tr style="border-top: 1px dashed #ccc;"><td style="padding: 10px 0; font-weight: bold;">Adults:</td><td>${adults}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: bold;">Children:</td><td>${children}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: bold;">Pets:</td><td>${pets}</td></tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="font-weight: bold;">Notes & Special Requests:</p>
            <p style="padding: 15px; background: #fff; border: 1px solid #eee; min-height: 50px;">${notes || 'None provided.'}</p>
          </div>
          <p style="margin-top: 30px; font-style: italic; color: #C07A58; font-size: 14px;">
            — Sent automatically via the Ayra Farms website. A tentative calendar event has been created.
          </p>
        </div>
      `,
    });

    // Email 2: Guest Confirmation
    await resend.emails.send({
      from: `Ayra Farms <info@theayrafarm.com>`,
      to: email,
      subject: "Your Ayra Farms Inquiry — We'll be in touch ✉️",
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 30px; background: #FDFBF7; border: 1px solid #E6E2D6; text-align: center;">
          <h1 style="font-style: italic; color: #2c3e50; font-size: 24px; margin-bottom: 20px;">
            Thank you for reaching out, ${name}.
          </h1>
          <p style="color: #4a5568; line-height: 1.6; font-size: 16px;">
            We have received your inquiry for a stay at <strong>${formattedSpace}</strong> from <strong>${checkIn}</strong> to <strong>${checkOut}</strong>.
          </p>
          <p style="color: #4a5568; line-height: 1.6; font-size: 16px;">
            We are currently checking our availability and will confirm with you within the next 24 hours via email.
          </p>
          <div style="margin: 30px auto; width: 50px; border-bottom: 1px solid #C07A58;"></div>
          <p style="color: #a0aec0; font-size: 14px; font-style: italic;">
            If you have urgent questions, please feel free to reply directly to this email.
          </p>
          <p style="color: #718096; font-size: 16px; margin-top: 20px; font-weight: bold;">
            — The Ayra Farms Team
          </p>
        </div>
      `,
      attachments: [
        {
          filename: 'ayra_farms_booking.ics',
          content: Buffer.from(generateIcs(body)).toString('base64'),
          contentType: 'text/calendar; method=REQUEST',
        },
      ],
    });

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been sent!",
    });
  } catch (error: any) {
    console.error("Booking inquiry error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
