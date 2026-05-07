import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asma Sahraoui — Symfony PHP Engineer | React | Node.js",
  description: "Full Stack Developer avec 4+ ans d'expérience. Spécialisée en PHP Symfony, React et Node.js.",
  keywords: ["Asma Sahraoui", "Symfony", "PHP Developer", "React", "Tunis"],
  authors: [{ name: "Asma Sahraoui" }],
  verification: {
    google: "68R0J9UGyjXwCKeXfK1IJlDbiaMa_RXvoiOZWcvPhaI", 
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Tu peux ajouter tes liens Google Fonts ici ou via next/font */}
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&family=DM+Mono&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}