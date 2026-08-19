import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacitat" };

export default function PrivacyPage() {
  return (
    <section className="section"><div className="container prose">
      <div className="eyebrow">Privacitat</div><h1 className="h2">Política de privacitat</h1>
      <p><strong>IMPORTANT:</strong> aquesta pàgina és una plantilla tècnica inicial. Abans de publicar la web, substitueix els camps pendents i revisa el text legal segons la teva situació concreta.</p>
      <h2>Responsable</h2><p>Responsable: Andreu Beltran. Email de contacte: configura <code>NEXT_PUBLIC_CONTACT_EMAIL</code>.</p>
      <h2>Dades recollides</h2><p>El formulari pot recollir nom, empresa, email, telèfon, servei d'interès, pressupost orientatiu, missatge i informació bàsica d'origen de la visita.</p>
      <h2>Finalitat</h2><p>Gestionar consultes professionals, valorar projectes i respondre possibles oportunitats laborals o comercials.</p>
      <h2>Conservació</h2><p>Defineix i publica un termini de conservació adequat abans de posar la captació de dades en producció.</p>
      <h2>Drets</h2><p>Inclou aquí el procediment i l'adreça de contacte per exercir els drets aplicables en matèria de protecció de dades.</p>
    </div></section>
  );
}
