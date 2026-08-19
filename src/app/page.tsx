import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const featuredProjects = projects.filter(
  (project) => project.category === "featured"
);

const labProjects = projects.filter(
  (project) => project.category === "lab"
);

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Desenvolupament web · Software · Automatització</div>
          <h1 className="h1">Software que resol problemes reals.</h1>
          <p className="lead">
            Desenvolupo aplicacions web, eines internes i automatitzacions per reduir feina manual,
            ordenar processos i convertir idees en productes funcionals.
          </p>
          <div className="actions">
            <Link className="btn primary" href="/projectes">Veure projectes</Link>
            <Link className="btn" href="/contacte">Parlem</Link>
          </div>
          <div className="hero-meta">
            <div><strong>Productes reals</strong><span className="muted">Projectes desplegats i utilitzables.</span></div>
            <div><strong>Full-stack</strong><span className="muted">Frontend, backend, APIs i bases de dades.</span></div>
            <div><strong>Orientat a negoci</strong><span className="muted">Tecnologia aplicada a reduir problemes concrets.</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="serveis">
        <div className="container">
          <div className="eyebrow">Què puc resoldre</div>
          <h2 className="h2">Menys tasques manuals. Més control.</h2>
          <div className="grid">
            <article className="card service-card">
              <div><div className="eyebrow">01</div><h3>Automatització</h3><p className="muted">Processos repetitius amb Excel, CSV, PDFs, correu, dades i tasques administratives que avui consumeixen hores.</p></div>
              <Link href="/serveis" className="arrow">Veure servei →</Link>
            </article>
            <article className="card service-card">
              <div><div className="eyebrow">02</div><h3>Aplicacions web</h3><p className="muted">Eines internes, portals, panells de gestió, APIs, formularis i aplicacions connectades a bases de dades.</p></div>
              <Link href="/serveis" className="arrow">Veure servei →</Link>
            </article>
            <article className="card service-card">
              <div><div className="eyebrow">03</div><h3>Software a mida</h3><p className="muted">Quan un full de càlcul ja no és suficient, creo una solució adaptada al procés real de l'empresa.</p></div>
              <Link href="/serveis" className="arrow">Veure servei →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Projectes destacats</div>
          <h2 className="h2">Construït, desplegat, utilitzat.</h2>
          <div className="grid">
            {featuredProjects.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Capacitats</div>

          <h2 className="h2">
            Del frontend fins a la base de dades.
          </h2>

          <p className="lead">
            Treballo en diferents parts del desenvolupament de software,
            adaptant la tecnologia al problema que s'ha de resoldre.
          </p>

          <div className="grid" style={{ marginTop: 40 }}>
            
            <article className="card service-card">
              <div>
                <div className="eyebrow">Frontend</div>
                <h3>Aplicacions i interfícies</h3>
                <p className="muted">
                  Desenvolupament d'interfícies web i mòbils responsive,
                  connectades a APIs i serveis backend.
                </p>

                <div className="tags">
                  <span className="tag">React</span>
                  <span className="tag">Next.js</span>
                  <span className="tag">React Native</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">TypeScript</span>
                </div>
              </div>
            </article>

            <article className="card service-card">
              <div>
                <div className="eyebrow">Backend</div>
                <h3>APIs i lògica de negoci</h3>
                <p className="muted">
                  APIs REST, autenticació, processament de dades i
                  aplicacions connectades a bases de dades.
                </p>

                <div className="tags">
                  <span className="tag">Node.js</span>
                  <span className="tag">Express</span>
                  <span className="tag">Python</span>
                  <span className="tag">Flask</span>
                  <span className="tag">C#</span>
                  <span className="tag">.NET</span>
                </div>
              </div>
            </article>

            <article className="card service-card">
              <div>
                <div className="eyebrow">Dades i sistemes</div>
                <h3>Més enllà de la web</h3>
                <p className="muted">
                  Bases de dades, automatització, integracions i
                  desenvolupament de software en entorns diferents.
                </p>

                <div className="tags">
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">MySQL</span>
                  <span className="tag">SQL</span>
                  <span className="tag">C++</span>
                  <span className="tag">WebAssembly</span>
                  <span className="tag">Tizen</span>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Laboratori</div>

          <h2 className="h2">
            Experiments, idees i tecnologia.
          </h2>

          <p className="lead">
            Projectes on experimento amb nous llenguatges, arquitectures,
            algoritmes i idees de producte.
          </p>

          <div className="grid" style={{ marginTop: 40 }}>
            {labProjects.map((project) => (
              <ProjectCard
                project={project}
                key={project.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">Com treballo</div>
            <h2 className="h2">Primer el problema. Després el codi.</h2>
            <p className="lead">L'objectiu no és afegir tecnologia perquè sí, sinó trobar la solució més simple que generi un resultat útil.</p>
          </div>
          <div className="list">
            {[
              ["01", "Analitzar", "Entendre el procés actual, les friccions i el resultat que necessites."],
              ["02", "Proposar", "Definir una solució concreta, abast, tecnologia i passos."],
              ["03", "Construir", "Desenvolupar una primera versió funcional i validar-la ràpid."],
              ["04", "Posar en producció", "Desplegar, documentar i iterar sobre ús real."],
            ].map(([n,t,d]) => <div className="list-item" key={n}><span className="number">{n}</span><div><strong>{t}</strong><div className="muted">{d}</div></div></div>)}
          </div>
        </div>
      </section>

      <section className="section compact">
        <div className="container cta">
          <div className="eyebrow">Tens un procés millorable?</div>
          <h2 className="h2">Explica'm què feu manualment.</h2>
          <p className="lead">Si una tasca es repeteix, mou dades entre eines o depèn massa d'Excel i correus, probablement hi ha marge per simplificar-la.</p>
          <div className="actions"><Link className="btn primary" href="/contacte">Explicar el projecte</Link></div>
        </div>
      </section>
    </>
  );
}
