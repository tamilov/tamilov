import type { Handler, HandlerEvent } from "@netlify/functions";
import nodemailer from "nodemailer";

export const handler: Handler = async (event: HandlerEvent) => {
  const headers = {
    "Access-Control-Allow-Origin": "https://www.tamilov.com",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  let body: Record<string, string> = {};
  try {
    body = JSON.parse(event.body ?? "{}");
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Invalid JSON" }),
    };
  }

  const { name, email, company, message, _honeypot } = body;

  // Silently discard honeypot submissions (bots)
  if (_honeypot) {
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  }

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Missing required fields" }),
    };
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars");
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Email service not configured" }),
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const companyLine = company
    ? `<tr><td style="padding:10px 16px 10px 0;font-weight:600;color:#1a1a1a;width:140px;vertical-align:top">Project / Company</td><td style="padding:10px 0;color:#444">${esc(company)}</td></tr>`
    : "";

  try {
    await transporter.sendMail({
      from: `"Tamilov Contact" <${gmailUser}>`,
      to: "tamilovdev@gmail.com",
      replyTo: email,
      subject: `New contact form submission — Tamilov`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Project / Company: ${company}` : "",
        "",
        `Message:`,
        message,
        "",
        "-- tamilov.com",
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px 16px">
          <div style="background:#ffffff;border-radius:12px;padding:32px;border:1px solid #e2e2de">
            <h2 style="font-size:22px;font-weight:700;margin:0 0 12px;color:#1a1a1a">New Contact Form Submission</h2>
            <div style="border-bottom:3px solid #F5A623;margin-bottom:24px"></div>

            <table style="width:100%;border-collapse:collapse;margin-bottom:28px">
              <tr>
                <td style="padding:10px 16px 10px 0;font-weight:600;color:#1a1a1a;width:140px;vertical-align:top">Name</td>
                <td style="padding:10px 0;color:#444">${esc(name)}</td>
              </tr>
              <tr>
                <td style="padding:10px 16px 10px 0;font-weight:600;color:#1a1a1a;vertical-align:top">Email</td>
                <td style="padding:10px 0"><a href="mailto:${esc(email)}" style="color:#1a1a1a">${esc(email)}</a></td>
              </tr>
              ${companyLine}
            </table>

            <div style="border-left:4px solid #F5A623;background:#f5f5f3;padding:16px 20px;border-radius:6px;margin-bottom:28px">
              <p style="font-weight:700;margin:0 0 8px;color:#1a1a1a">Message</p>
              <p style="white-space:pre-line;margin:0;line-height:1.6;color:#333">${esc(message)}</p>
            </div>

            <p style="font-size:12px;color:#aaa;margin:0;border-top:1px solid #eeede9;padding-top:16px">tamilov.com</p>
          </div>
        </div>
      `,
    });

    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error("Failed to send email:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
