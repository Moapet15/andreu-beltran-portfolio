"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginForm() {
  const router = useRouter();
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true); setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch("/api/admin/login", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data)});
    if (!res.ok) { const body = await res.json(); setError(body.error || "Accés denegat."); setLoading(false); return; }
    router.push("/admin"); router.refresh();
  }

  return <form className="form" onSubmit={submit}>
    <div className="field"><label htmlFor="email">Email</label><input className="input" type="email" id="email" name="email" required /></div>
    <div className="field"><label htmlFor="password">Contrasenya</label><input className="input" type="password" id="password" name="password" required /></div>
    {error && <div className="notice error">{error}</div>}
    <button className="btn primary" disabled={loading}>{loading ? "Entrant..." : "Entrar"}</button>
  </form>;
}
