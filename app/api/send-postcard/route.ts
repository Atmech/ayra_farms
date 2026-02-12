import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, who, date, pets } = body;

        // Validate required fields
        if (!name || !email) {
            return NextResponse.json(
                { success: false, message: "Name and email are required." },
                { status: 400 }
            );
        }

        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

        if (!RESEND_API_KEY || !CONTACT_EMAIL) {
            // If no API key, log the submission and return success for demo purposes
            console.log("📮 New Postcard Received:", {
                name,
                email,
                phone,
                who,
                date,
                pets,
            });
            return NextResponse.json({
                success: true,
                message: "Postcard received! (Demo mode — no email API key configured)",
            });
        }

        // Send email via Resend
        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "Ayra Farms <onboarding@resend.dev>",
                to: [CONTACT_EMAIL],
                subject: `📮 New Postcard from ${name}`,
                html: `
          <div style="font-family: Georgia, serif; max-width: 500px; margin: 0 auto; padding: 20px; background: #FDFBF7; border: 1px solid #E6E2D6;">
            <h1 style="font-style: italic; color: #2c3e50; border-bottom: 2px solid #C07A58; padding-bottom: 10px;">
              A New Postcard from the Farm
            </h1>
            <table style="width: 100%; font-size: 16px; color: #2c3e50;">
              <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td>${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${phone || "Not provided"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Travel Type:</td><td>${who || "Not specified"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Preferred Date:</td><td>${date || "Not specified"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Pets:</td><td>${pets}</td></tr>
            </table>
            <p style="margin-top: 20px; font-style: italic; color: #C07A58; font-size: 14px;">
              — Sent via Ayra Farms website
            </p>
          </div>
        `,
            }),
        });

        if (res.ok) {
            return NextResponse.json({
                success: true,
                message: "Your postcard has been sent!",
            });
        } else {
            const errorData = await res.json();
            return NextResponse.json(
                { success: false, message: errorData.message || "Failed to send email." },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Postcard error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error." },
            { status: 500 }
        );
    }
}
