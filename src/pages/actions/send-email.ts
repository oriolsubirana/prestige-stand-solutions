import type { APIRoute } from "astro";
import { sendEmail } from "../../utils/email";
import { getLang, localePath, useTranslations } from "../../i18n";

export const prerender = false;

const TO = "contact@prestigestandsolutions.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = 5000;
const NEEDS: Record<string, string> = { stand: "Stand", grafica: "Gráfica", ambos: "Stand y gráfica" };

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const field = (form: FormData, name: string) => String(form.get(name) ?? "").trim().slice(0, MAX_LENGTH);

const row = (label: string, value: string) =>
  `<p style="margin-bottom: 12px; font-size: 16px;">${label}: <strong>${escapeHtml(value)}</strong></p>`;

export const POST: APIRoute = async ({ request, redirect }) => {
  // The form enhances to fetch() and asks for JSON; without JS it gets redirects
  const wantsJson = request.headers.get("accept")?.includes("application/json") ?? false;
  const form = await request.formData();
  const lang = getLang(String(form.get("lang") ?? ""));
  const fail = (status: number) =>
    wantsJson
      ? Response.json({ ok: false }, { status })
      : redirect(`${localePath(lang)}?status=error#${useTranslations(lang).ids.contact}`, 303);

  const name = field(form, "name");
  const email = field(form, "email");
  const company = field(form, "company");
  const phone = field(form, "phone");
  const exhibition = field(form, "exhibition");
  const size = field(form, "size");
  const need = NEEDS[field(form, "need")] ?? NEEDS.ambos;
  const message = field(form, "message");

  if (!name || !EMAIL_PATTERN.test(email)) return fail(400);

  const html = `<div style="max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px; font-family: Arial, sans-serif; background-color: #f9f9f9;">
    <h2 style="margin-bottom: 16px; color: #444;">Nueva solicitud de presupuesto</h2>
    ${row("Nombre", name)}
    ${row("Email", email)}
    ${row("Empresa", company)}
    ${row("Teléfono", phone)}
    ${row("Feria", exhibition)}
    ${row("Superficie (m²)", size)}
    ${row("Qué necesita", need)}
    ${row("Idioma de la web", lang === "en" ? "Inglés" : "Español")}
    <h3 style="color: #444; margin-top: 20px;">Mensaje</h3>
    <p style="font-size: 15px; color: #555; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
  </div>`;

  try {
    await sendEmail({ subject: `Presupuesto: ${name}`, to: TO, html, replyTo: email });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return fail(502);
  }

  return wantsJson ? Response.json({ ok: true }) : redirect(localePath(lang, "/success"), 303);
};
