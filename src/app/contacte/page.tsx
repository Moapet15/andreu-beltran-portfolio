import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacte",
  alternates: {
    canonical: "/contacte",
  },
};

export default function ContactPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;

  return (
    <section className="section">
      <div className="container split">
        <div>
          <div className="eyebrow">Contacte</div>

          <h1 className="h2">
            Explica&apos;m què vols millorar.
          </h1>

          <p className="lead">
            No cal que tinguis la solució tècnica. Explica el procés,
            el problema o la necessitat i a partir d&apos;aquí podem
            valorar la millor manera d&apos;abordar-lo.
          </p>

          <div style={{ marginTop: 30 }}>
            <div className="eyebrow">
              Contacte directe
            </div>

            <div
              className="card"
              style={{
                marginTop: 15,
                display: "grid",
                gap: 14,
              }}
            >
              {contactEmail && (
                <div>
                  <strong>Email</strong>
                  <br />
                  <a
                    href={`mailto:${contactEmail}`}
                    className="muted"
                  >
                    {contactEmail}
                  </a>
                </div>
              )}

              {linkedinUrl && (
                <div>
                  <strong>LinkedIn</strong>
                  <br />
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="muted"
                  >
                    Veure perfil professional →
                  </a>
                </div>
              )}

              {githubUrl && (
                <div>
                  <strong>GitHub</strong>
                  <br />
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="muted"
                  >
                    Veure repositoris →
                  </a>
                </div>
              )}
            </div>
          </div>

          <div
            style={{
              marginTop: 30,
            }}
            className="muted"
          >
            També estic obert a oportunitats laborals en desenvolupament
            de software, backend, full-stack, dades, automatització i
            altres rols tècnics.
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}