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
    ? `<tr><td style="padding:8px 0;font-weight:bold;color:#555;width:100px">Company</td><td style="padding:8px 0">${esc(company)}</td></tr>`
    : "";

  try {
    await transporter.sendMail({
      from: `"Tamilov Contact" <${gmailUser}>`,
      to: "tamilovdev@gmail.com",
      replyTo: email,
      subject: `New message from ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : "",
        "",
        `Message:\n${message}`,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
          <div style="border-bottom:3px solid #1a1a1a;padding-bottom:16px;margin-bottom:24px">
            <strong style="font-size:18px">Tamilov — New Contact</strong>
          </div>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
            <tr><td style="padding:8px 0;font-weight:bold;color:#555;width:100px">Name</td><td style="padding:8px 0">${esc(name)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#555">Email</td><td style="padding:8px 0"><a href="mailto:${esc(email)}" style="color:#1a1a1a">${esc(email)}</a></td></tr>
            ${companyLine}
          </table>
          <div style="border-top:1px solid #eee;padding-top:20px">
            <p style="font-weight:bold;color:#555;margin:0 0 8px">Message</p>
            <p style="white-space:pre-line;margin:0;line-height:1.6">${esc(message)}</p>
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
