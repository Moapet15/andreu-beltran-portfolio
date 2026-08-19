import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Projectes" };

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">Portfolio</div>
        <h1 className="h2">Projectes que demostren capacitat d'execució.</h1>
        <p className="lead">Aplicacions amb backend, bases de dades, autenticació, lògica de negoci i desplegament real.</p>
        <div className="grid" style={{marginTop: 40}}>{projects.map((p) => <ProjectCard project={p} key={p.slug} />)}</div>
      </div>
    </section>
  );
}
