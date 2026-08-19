import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" href="/">Andreu Beltran</Link>
        <nav className="navlinks" aria-label="Navegació principal">
          <Link href="/projectes">Projectes</Link>
          <Link href="/serveis">Serveis</Link>
          <Link href="/contacte">Contacte</Link>
          <Link className="btn primary small" href="/contacte">Parlem del teu projecte</Link>
        </nav>
      </div>
    </header>
  );
}
