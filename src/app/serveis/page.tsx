import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Serveis",
  alternates: {
    canonical: "/serveis",
  },
};

const services = [
  ["Automatització de processos", "Tasques repetitives, tractament de fitxers, generació d'informes, moviments de dades, correus i fluxos que avui depenen d'operacions manuals."],
  ["Aplicacions web", "Eines de gestió, portals interns, dashboards, formularis, catàlegs, sistemes d'usuaris, APIs i aplicacions connectades a bases de dades."],
  ["Integracions", "Connexió entre serveis, APIs i fonts de dades per evitar duplicar feina i reduir errors humans."],
  ["Software a mida", "Solucions específiques quan les eines genèriques no encaixen amb el procés de l'empresa."],
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><div className="eyebrow">Serveis</div><h1 className="h1">Tecnologia aplicada a feina real.</h1><p className="lead">Si hi ha hores que es perden repetint passos, copiant dades o mantenint processos improvisats, aquí és on puc aportar valor.</p></div></section>
      <section className="section compact"><div className="container grid">{services.map(([title, description],i) => <article className="card project-card" key={title}><div><div className="eyebrow">0{i+1}</div><h3>{title}</h3><p className="muted">{description}</p></div><Link href="/contacte" className="arrow">Comentar necessitat →</Link></article>)}</div></section>
      <section className="section"><div className="container split"><div><div className="eyebrow">Exemples</div><h2 className="h2">Què es pot automatitzar?</h2></div><div className="list">{["Unificar Excel o CSV de diferents fonts", "Generar informes o PDFs automàticament", "Enviar notificacions o correus segons regles", "Crear panells per consultar informació centralitzada", "Importar, transformar i validar dades", "Substituir processos interns basats en fulls de càlcul"].map((x,i)=><div className="list-item" key={x}><span className="number">{String(i+1).padStart(2,"0")}</span><strong>{x}</strong></div>)}</div></div></section>
    </>
  );
}
