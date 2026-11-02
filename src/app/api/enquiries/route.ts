import { Resend } from "resend";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin && origin !== "https://www.subasinfra.com" && origin !== "https://subasinfra.com") return Response.json({ error: "Please submit from our website." }, { status: 403 });
  if (Number(request.headers.get("content-length") || 0) > 10000) return Response.json({ error: "Your message is too long." }, { status: 413 });
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Please check your details." }, { status: 400 }); }
  if (!body || typeof body !== "object") return Response.json({ error: "Please check your details." }, { status: 400 });
  const field = (key: string) => typeof body[key] === "string" ? body[key].trim() : "";
  const name = field("name"), phone = field("phone"), email = field("email"), project = field("project"), message = field("message");
  if (field("website")) return Response.json({ error: "Unable to submit. Please try again." }, { status: 400 });
  if (!name || name.length > 100 || !/^\+?[0-9][0-9 ]{6,23}$/.test(phone) || !["Subas Vatika", "Subas Classic", "Help me choose"].includes(project) || email.length > 254 || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) || message.length > 2000) return Response.json({ error: "Enter your name, a valid phone number and a project. Check your email if provided." }, { status: 400 });
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_EMAIL_DOMAIN) return Response.json({ error: "Email delivery is temporarily unavailable. Please call +91 93481 44009." }, { status: 503 });
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: `SUBAS Infra <enquiries@${process.env.RESEND_EMAIL_DOMAIN}>`,
      to: ["sales.subasinfra@gmail.com", "sahusiddharth8@gmail.com"],
      ...(email ? { replyTo: email } : {}),
      subject: `New website enquiry — ${project}`,
      text: `New SUBAS Infra website enquiry\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || "Not provided"}\nProject: ${project}\nMessage: ${message || "Not provided"}\nSubmitted: ${new Date().toISOString()}\n\nPlease contact this visitor about their enquiry.`,
    });
    if (error || !data?.id) {
      console.error("Enquiry email rejected", error?.name || "unknown");
      return Response.json({ error: "We couldn’t send your enquiry. Please retry or call +91 93481 44009." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "We couldn’t send your enquiry. Please retry or call +91 93481 44009." }, { status: 502 });
  }
}
