import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://andreu-beltran-portfolio.vercel.app"),

  title: {
    default: "Andreu Beltran | Desenvolupament i automatització",
    template: "%s | Andreu Beltran",
  },

  description:
    "Desenvolupament web, software a mida i automatització de processos per a empreses.",

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "gwyCtKHwM9WV3Uau_enndTG1zOH6kAbiO1aLHlfrv2o",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ca">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
