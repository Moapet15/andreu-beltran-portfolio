"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [state, setState] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [error, setError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const formElement = e.currentTarget;

  setState("sending");
  setError("");

  const form = new FormData(formElement);
  const payload = Object.fromEntries(form.entries());

  const qs = new URLSearchParams(window.location.search);

  Object.assign(payload, {
    utm_source: qs.get("utm_source") || "",
    utm_medium: qs.get("utm_medium") || "",
    utm_campaign: qs.get("utm_campaign") || "",
    referrer: document.referrer,
    landing_page: window.location.href,
  });

  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data.error || "No s'ha pogut enviar el formulari."
      );
    }

    formElement.reset();
    setState("success");
  } catch (err) {
    setError(
      err instanceof Error
        ? err.message
        : "Error inesperat."
    );

    setState("error");
  }
}

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-row">
        <div className="field"><label htmlFor="name">Nom *</label><input className="input" id="name" name="name" required maxLength={120} /></div>
        <div className="field"><label htmlFor="company">Empresa</label><input className="input" id="company" name="company" maxLength={160} /></div>
      </div>
      <div className="form-row">
        <div className="field"><label htmlFor="email">Email *</label><input className="input" type="email" id="email" name="email" required maxLength={255} /></div>
        <div className="field"><label htmlFor="phone">Telèfon</label><input className="input" id="phone" name="phone" maxLength={40} /></div>
      </div>
      <div className="form-row">
        <div className="field"><label htmlFor="service">Què necessites? *</label><select className="select" id="service" name="service" required defaultValue=""><option value="" disabled>Selecciona una opció</option><option>Automatització</option><option>Aplicació web</option><option>Software a mida</option><option>Integració</option><option>Oferta laboral</option><option>Altres</option></select></div>
        <div className="field"><label htmlFor="budget">Pressupost orientatiu</label><select className="select" id="budget" name="budget" defaultValue=""><option value="">Prefereixo comentar-ho</option><option value="<1000">Menys de 1.000 €</option><option value="1000-3000">1.000 – 3.000 €</option><option value="3000-6000">3.000 – 6.000 €</option><option value=">6000">Més de 6.000 €</option></select></div>
      </div>
      <div className="field"><label htmlFor="message">Explica'm el problema *</label><textarea className="textarea" id="message" name="message" required minLength={20} maxLength={5000} placeholder="Què feu actualment, què voldríeu millorar i quin resultat espereu?" /></div>
      <div className="hidden-honeypot" aria-hidden="true"><label>Web<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <label className="checkbox"><input type="checkbox" name="privacy_consent" value="true" required /><span>Accepto que les dades s'utilitzin per respondre aquesta consulta. He llegit la <Link href="/privacitat" style={{textDecoration:"underline"}}>política de privacitat</Link>.</span></label>
      {state === "success" && <div className="notice success">Missatge rebut. La consulta ha quedat registrada correctament.</div>}
      {state === "error" && <div className="notice error">{error}</div>}
      <button className="btn primary" type="submit" disabled={state === "sending"}>{state === "sending" ? "Enviant..." : "Enviar consulta"}</button>
    </form>
  );
}
