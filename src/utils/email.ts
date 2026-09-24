import { createTransport } from "nodemailer";
import { RESEND_API_KEY, SEND_EMAIL_FROM } from "astro:env/server";

type SendEmailOptions = {
  subject: string;
  to: string;
  html: string;
  replyTo?: string;
};

const transporter = createTransport({
  host: "smtp.resend.com",
  secure: true,
  port: 465,
  auth: { user: "resend", pass: RESEND_API_KEY },
});

export async function sendEmail({ subject, to, html, replyTo }: SendEmailOptions) {
  return transporter.sendMail({ subject, to, html, replyTo, from: SEND_EMAIL_FROM });
}
