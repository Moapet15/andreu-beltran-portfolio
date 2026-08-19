import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project-card">
      <div>
        <div className="eyebrow">
          {project.eyebrow} · {project.status}
        </div>
        <h3>{project.name}</h3>
        <p className="muted">{project.description}</p>
        <div className="tags">
          {project.stack.slice(0, 6).map((item) => <span className="tag" key={item}>{item}</span>)}
        </div>
      </div>
      <Link href={`/projectes/${project.slug}`}><span className="arrow">Veure cas →</span></Link>
    </article>
  );
}
