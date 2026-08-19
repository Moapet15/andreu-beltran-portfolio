import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">{project.eyebrow}</div>
          <h1 className="h1" style={{fontSize:"clamp(3rem,7vw,6rem)"}}>{project.name}</h1>
          <p className="lead">{project.description}</p>
        </div>
      </section>
      <section className="section compact">
        <div className="container split">
          <div>
            <div className="eyebrow">Resultat</div>
            <h2 className="h2">Del problema al producte.</h2>
            <p className="lead">{project.result}</p>
            <div className="tags">{project.stack.map((s) => <span className="tag" key={s}>{s}</span>)}</div>
          </div>
          <div className="card">
            <h3>Funcionalitats destacades</h3>
            <div className="list">{project.highlights.map((h,i) => <div className="list-item" key={h}><span className="number">{String(i+1).padStart(2,"0")}</span><strong>{h}</strong></div>)}</div>
          </div>
        </div>
      </section>
      <section className="section compact"><div className="container"><Link className="btn" href="/projectes">← Tots els projectes</Link></div></section>
    </>
  );
}
