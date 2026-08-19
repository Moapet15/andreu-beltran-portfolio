import Link from "next/link";

export default function Footer() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;

  return (
    <footer className="footer">
      <div className="container footer-row">
        <div>
          © {new Date().getFullYear()} Andreu Beltran
        </div>

        <div className="footer-links">
          <Link href="/projectes">Projectes</Link>
          <Link href="/serveis">Serveis</Link>
          <Link href="/contacte">Contacte</Link>

          {contactEmail && (
            <a href={`mailto:${contactEmail}`}>
              Email
            </a>
          )}

          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}

          <Link href="/privacitat">Privacitat</Link>
        </div>
      </div>
    </footer>
  );
}