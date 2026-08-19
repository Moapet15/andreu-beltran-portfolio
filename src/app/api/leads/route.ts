import { NextResponse } from "next/server";
import { db } from "@/lib/db";

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (clean(body.website, 200)) return NextResponse.json({ ok: true });

    const name = clean(body.name, 120);
    const company = clean(body.company, 160);
    const email = clean(body.email, 255).toLowerCase();
    const phone = clean(body.phone, 40);
    const service = clean(body.service, 80);
    const budget = clean(body.budget, 80);
    const message = clean(body.message, 5000);
    const privacyConsent = body.privacy_consent === "true" || body.privacy_consent === true;
    const utmSource = clean(body.utm_source, 120);
    const utmMedium = clean(body.utm_medium, 120);
    const utmCampaign = clean(body.utm_campaign, 160);
    const referrer = clean(body.referrer, 1500);
    const landingPage = clean(body.landing_page, 1500);

    if (!name || !validEmail(email) || !service || message.length < 20 || !privacyConsent) {
      return NextResponse.json({ error: "Revisa els camps obligatoris del formulari." }, { status: 400 });
    }

    const sql = db();
    await sql`
      INSERT INTO leads (
        name, company, email, phone, service, budget, message,
        privacy_consent, source, utm_source, utm_medium, utm_campaign,
        referrer, landing_page
      ) VALUES (
        ${name}, ${company || null}, ${email}, ${phone || null}, ${service},
        ${budget || null}, ${message}, ${privacyConsent}, 'website',
        ${utmSource || null}, ${utmMedium || null}, ${utmCampaign || null},
        ${referrer || null}, ${landingPage || null}
      )
    `;

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("POST /api/leads", error);
    return NextResponse.json({ error: "No s'ha pogut registrar la consulta." }, { status: 500 });
  }
}
