import type { APIRoute } from "astro";
import { sendEmail } from "../../utils/email";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
    // Get the form data submitted by the user on the home page
    const formData = await request.formData();
    const subject = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const company = formData.get("company") as string;
    const phone = formData.get("phone") as string | null;
    const exhibition = formData.get("exhibition") as string;
    const size = formData.get("size") as string;
    const message = formData.get("message") as string | null;
    const to = "contact@prestigestandsolutions.com";

    // Throw an error if we're missing any of the needed fields.
    if (!subject || !email || !message || !phone) {
        throw new Error("Missing required fields");
    }

    // Try to send the email using a `sendEmail` function we'll create next. Throw
    // an error if it fails.
    try {
        const html = `<div style="max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px; font-family: Arial, sans-serif; background-color: #f9f9f9; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                        <div style="margin-bottom: 24px; color: #333;">
                            <h2 style="margin-bottom: 16px; color: #444;">Contact Information</h2>
                            <p style="margin-bottom: 12px; font-size: 16px;">Name: <strong>${subject}</strong></p>
                            <p style="margin-bottom: 12px; font-size: 16px;">Email: <strong>${email}</strong></p>
                            <p style="margin-bottom: 12px; font-size: 16px;">Company: <strong>${company}</strong></p>
                            <p style="margin-bottom: 12px; font-size: 16px;">Phone: <strong>${phone}</strong></p>
                            <p style="margin-bottom: 12px; font-size: 16px;">Exhibition: <strong>${exhibition}</strong></p>
                            <p style="margin-bottom: 12px; font-size: 16px;">Size: <strong>${size}</strong></p>
                            <div style="margin-top: 20px;">
                                <h3 style="color: #444;">Message</h3>
                                <p style="font-size: 15px; color: #555; line-height: 1.6;">${message}</p>
                            </div>
                        </div>
                    </div>`;
        await sendEmail({ subject, to, html });
    } catch (error) {
        throw new Error("Failed to send email");
    }

    // Redirect the user to a success page after the email is sent.
    return redirect("/success");
};