import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contacte" };

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container split">
        <div>
          <div className="eyebrow">Contacte</div>
          <h1 className="h2">Explica'm què vols millorar.</h1>
          <p className="lead">No cal que tinguis la solució tècnica. Explica el procés, el problema o la necessitat i a partir d'aquí es pot valorar la millor manera d'abordar-lo.</p>
          <div style={{marginTop:30}} className="muted">També obert a oportunitats laborals de desenvolupament de software.</div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
