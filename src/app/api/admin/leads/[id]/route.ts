import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { db } from "@/lib/db";

const allowed = new Set(["new","contacted","meeting","proposal","won","lost"]);

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const numericId = Number(id);
  const { status } = await request.json();
  if (!Number.isInteger(numericId) || !allowed.has(status)) return NextResponse.json({ error: "Dades invàlides" }, { status: 400 });
  const sql = db();
  await sql`UPDATE leads SET status=${status}, updated_at=NOW() WHERE id=${numericId}`;
  return NextResponse.json({ ok: true });
}
