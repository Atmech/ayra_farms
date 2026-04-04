import { Resend } from "resend";
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
        const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@theayrafarm.com";

        if (!RESEND_API_KEY || RESEND_API_KEY === "re_xxxxxxxxxxxx") {
            // If no API key, log the submission and return success for demo purposes
            console.log("📮 New Postcard Received (Demo Mode):", {
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

        const resend = new Resend(RESEND_API_KEY);

        // Send email via Resend
        const { data, error } = await resend.emails.send({
            from: "Ayra Farms Website <info@theayrafarm.com>",
            to: CONTACT_EMAIL,
            replyTo: email,
            subject: `🌟 New Lead: Postcard from ${name}`,
            html: `
          <div style="font-family: Georgia, serif; max-width: 500px; margin: 0 auto; padding: 20px; background: #FDFBF7; border: 1px solid #E6E2D6;">
            <h1 style="font-style: italic; color: #2c3e50; border-bottom: 2px solid #C07A58; padding-bottom: 10px;">
              New Lead: Postcard from the Farm
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
        });

        if (error) {
            return NextResponse.json(
                { success: false, message: error.message || "Failed to send email." },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Your postcard has been sent!",
        });
    } catch (error) {
        console.error("Postcard error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error." },
            { status: 500 }
        );
    }
}
