import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div>© {new Date().getFullYear()} Andreu Beltran</div>
        <div className="footer-links">
          <Link href="/projectes">Projectes</Link>
          <Link href="/serveis">Serveis</Link>
          <Link href="/contacte">Contacte</Link>
          <Link href="/privacitat">Privacitat</Link>
        </div>
      </div>
    </footer>
  );
}
