import type { VercelRequest, VercelResponse } from "@vercel/node";

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

  if (_honeypot) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable");
    return res.status(500).json({ error: "Email service not configured" });
  }

  const fromAddress = process.env.RESEND_FROM ?? "Tamilov Contact <onboarding@resend.dev>";
  const companyRow = company
    ? `<tr><td style="padding:6px 0;font-weight:600;color:#555;width:90px">Company</td><td style="padding:6px 0">${esc(company)}</td></tr>`
    : "";

  const html = `
    <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
      <div style="border-bottom:3px solid #1a1a1a;padding-bottom:14px;margin-bottom:22px">
        <strong style="font-size:17px">Tamilov — New Contact Form Submission</strong>
      </div>
      <table style="width:100%;border-collapse:collapse;margin-bottom:22px">
        <tr><td style="padding:6px 0;font-weight:600;color:#555;width:90px">Name</td><td style="padding:6px 0">${esc(name)}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600;color:#555">Email</td><td style="padding:6px 0"><a href="mailto:${esc(email)}" style="color:#1a1a1a">${esc(email)}</a></td></tr>
        ${companyRow}
      </table>
      <div style="border-top:1px solid #eee;padding-top:18px">
        <p style="font-weight:600;color:#555;margin:0 0 8px 0">Message</p>
        <p style="white-space:pre-line;margin:0;line-height:1.65">${esc(message)}</p>
      </div>
    </div>
  `;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : "",
    "",
    `Message:\n${message}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: ["tmilovdev@gmail.com"],
        reply_to: email,
        subject: `New message from ${name}${company ? ` (${company})` : ""}`,
        html,
        text,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("Resend API error:", response.status, body);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Failed to send email:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}

function esc(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
