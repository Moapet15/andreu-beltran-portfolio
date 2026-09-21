import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacitat",
  alternates: {
    canonical: "/privacitat",
  },
};

export default function PrivacyPage() {
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  return (
    <section className="section">
      <div className="container prose">
        <div className="eyebrow">
          Privacitat
        </div>

        <h1 className="h2">
          Política de privacitat
        </h1>

        <p>
          Aquesta política descriu el tractament de les dades
          proporcionades a través del formulari de contacte d&apos;aquest
          lloc web.
        </p>

        <h2>Responsable</h2>

        <p>
          Responsable: <strong>Andreu Beltran</strong>.
        </p>

        {contactEmail && (
          <p>
            Correu electrònic de contacte:{" "}
            <a href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
        )}

        <h2>Dades recollides</h2>

        <p>
          A través del formulari es poden recollir dades com el nom,
          empresa, correu electrònic, telèfon, tipus de servei
          d&apos;interès, pressupost orientatiu i el contingut del
          missatge enviat.
        </p>

        <p>
          També es pot registrar informació tècnica bàsica relacionada
          amb l&apos;origen de la visita, com la pàgina d&apos;entrada,
          referrer o paràmetres UTM.
        </p>

        <h2>Finalitat</h2>

        <p>
          Les dades s&apos;utilitzen exclusivament per gestionar
          consultes professionals, estudiar possibles projectes,
          respondre sol·licituds de contacte i gestionar oportunitats
          laborals o comercials.
        </p>

        <h2>Conservació</h2>

        <p>
          Les dades es conservaran durant el temps necessari per
          gestionar la consulta o relació professional i, posteriorment,
          durant els terminis que siguin legalment aplicables.
        </p>

        <h2>Drets</h2>

        <p>
          Pots sol·licitar l&apos;accés, rectificació, supressió,
          limitació o altres drets aplicables sobre les teves dades
          mitjançant el correu electrònic de contacte indicat en aquesta
          pàgina.
        </p>

        <h2>Seguretat</h2>

        <p>
          S&apos;apliquen mesures tècniques raonables per protegir les
          dades enviades i restringir-ne l&apos;accés.
        </p>
      </div>
    </section>
  );
}