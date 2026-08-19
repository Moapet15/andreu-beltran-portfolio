import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, createSessionToken, safeEqual } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const adminEmail = process.env.ADMIN_EMAIL || "";
    const adminPassword = process.env.ADMIN_PASSWORD || "";
    if (!adminEmail || !adminPassword || typeof email !== "string" || typeof password !== "string" || !safeEqual(email.trim().toLowerCase(), adminEmail.trim().toLowerCase()) || !safeEqual(password, adminPassword)) {
      return NextResponse.json({ error: "Credencials incorrectes." }, { status: 401 });
    }
    const store = await cookies();
    store.set(ADMIN_COOKIE, createSessionToken(adminEmail), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 12,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "No s'ha pogut iniciar sessió." }, { status: 400 });
  }
}
