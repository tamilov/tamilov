import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "https://www.tamilov.com");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, company, message, _honeypot } = req.body ?? {};

  // Silently discard honeypot submissions (bots)
  if (_honeypot) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    console.error("Email service not configured: missing GMAIL_USER or GMAIL_APP_PASSWORD");
    return res.status(500).json({ error: "Email service not configured" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  const companyLine = company ? `<tr><td style="padding:8px 0;font-weight:bold;color:#555;width:100px">Company</td><td style="padding:8px 0">${escapeHtml(company)}</td></tr>` : "";

  try {
    await transporter.sendMail({
      from: `"Tamilov Contact" <${gmailUser}>`,
      to: "tmilovdev@gmail.com",
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
            <tr><td style="padding:8px 0;font-weight:bold;color:#555;width:100px">Name</td><td style="padding:8px 0">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#555">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}" style="color:#1a1a1a">${escapeHtml(email)}</a></td></tr>
            ${companyLine}
          </table>
          <div style="border-top:1px solid #eee;padding-top:20px">
            <p style="font-weight:bold;color:#555;margin:0 0 8px">Message</p>
            <p style="white-space:pre-line;margin:0;line-height:1.6">${escapeHtml(message)}</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Failed to send email:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
