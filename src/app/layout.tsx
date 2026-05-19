import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import "./globals.css";

// On importe une police Serif haut de gamme pour les titres
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

// On importe une police Sans-Serif épurée pour les textes courants
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Des métadonnées optimisées pour le SEO du Château
export const metadata: Metadata = {
  title: "Château de Projan | Hôtel, Restaurant & Art Contemporain dans le Gers",
  description: "Découvrez le Château de Projan, demeure de prestige du XIe siècle au cœur du Gers. Hôtel d'exception, table gastronomique et collections d'art contemporain face aux Pyrénées.",
  keywords: ["Château de Projan", "Hôtel de luxe Gers", "Restaurant gastronomique Gers", "Art contemporain Gascogne", "Séjour prestige Pyrénées"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr" // Passage en français
      className={`${cormorantGaramond.variable} ${inter.variable} h-full antialiased bg-chateau-pierre`}
    >
      <body className="min-h-full flex flex-col font-sans text-chateau-anthracite selection:bg-chateau-or selection:text-chateau-anthracite">
        
        {/* La Navbar s'affichera en haut de absolument toutes les pages */}
        <Navbar />
        
        {/* Le contenu principal de tes pages */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}