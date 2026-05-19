"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-chateau-anthracite text-white pt-20 pb-8 border-t border-chateau-pierre/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* PARTIE SUPÉRIEURE : LOGO ET GRANDE BASELINE */}
        <div className="flex flex-col items-center text-center pb-16 border-b border-chateau-pierre/10">
          <Link href="/" className="group flex flex-col items-center justify-center mb-6">
            <Image 
              src="/logo-chateau.png" 
              alt="Logo Château de Projan"
              width={160} 
              height={45}  
              className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>
          <p className="font-serif text-xl sm:text-2xl text-chateau-pierre italic max-w-xl leading-relaxed tracking-wide">
            « Une parenthèse intemporelle où l'art de vivre gascon rencontre l'émotion de la création. »
          </p>
        </div>

        {/* PARTIE CENTRALE : LIENS, CONTACT ET ACCÈS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 text-sm">
          
          {/* Colonne 1 : Navigation principale */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-chateau-or font-semibold">
              Le Domaine
            </h4>
            <ul className="space-y-3 font-sans text-chateau-pierre/80 tracking-wide">
              <li>
                <Link href="/chambres" className="hover:text-white transition-colors">Les Chambres & Suites</Link>
              </li>
              <li>
                <Link href="/restaurant" className="hover:text-white transition-colors">La Table du Château</Link>
              </li>
              <li>
                <Link href="/art" className="hover:text-white transition-colors">L'Art & Le Parc</Link>
              </li>
              <li>
                <Link href="/histoire" className="hover:text-white transition-colors">L'Histoire du Lieu</Link>
              </li>
            </ul>
          </div>

          {/* Colonne 2 : Expériences & Événements */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-chateau-or font-semibold">
              Expériences
            </h4>
            <ul className="space-y-3 font-sans text-chateau-pierre/80 tracking-wide">
              <li>
                <Link href="/degustations" className="hover:text-white transition-colors">Dégustations d'Armagnac</Link>
              </li>
              <li>
                <Link href="/evenements" className="hover:text-white transition-colors">Événements Privés & Séminaires</Link>
              </li>
              <li>
                <Link href="/region" className="hover:text-white transition-colors">Découvrir le Gers</Link>
              </li>
              <li>
                <Link href="#reservation" className="text-chateau-or hover:underline transition-all">Réserver un séjour</Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Contact & Réservations */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-chateau-or font-semibold">
              Contact
            </h4>
            <ul className="space-y-3 font-sans text-chateau-pierre/80 tracking-wide">
              <li>
                <a href="tel:+33562000000" className="hover:text-white transition-colors">+33 (0)5 62 00 00 00</a>
              </li>
              <li>
                <a href="mailto:contact@chateaudeprojan.com" className="hover:text-white transition-colors">contact@chateaudeprojan.com</a>
              </li>
              <li className="pt-2 flex space-x-4">
                {/* Icônes de réseaux sociaux stylisées en texte minimaliste */}
                <a href="#" className="text-xs tracking-widest uppercase hover:text-chateau-or transition-colors">Instagram</a>
                <a href="#" className="text-xs tracking-widest uppercase hover:text-chateau-or transition-colors">Facebook</a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Localisation / Accès */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-chateau-or font-semibold">
              Situation
            </h4>
            <p className="font-sans text-chateau-pierre/80 tracking-wide leading-relaxed">
              Château de Projan <br />
              32400 Projan <br />
              Gers, Occitanie · France
            </p>
            <div className="pt-2">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-sans tracking-widest uppercase text-chateau-or hover:text-white transition-colors"
              >
                Calculer l'itinéraire →
              </a>
            </div>
          </div>

        </div>

        {/* PARTIE INFÉRIEURE : COPYRIGHT & MENTIONS LÉGALES */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-chateau-pierre/5 text-[11px] font-sans tracking-widest uppercase text-chateau-pierre/50">
          <p>© {currentYear} Château de Projan. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="hover:text-chateau-or transition-colors">Mentions Légales</Link>
            <Link href="/confidentialite" className="hover:text-chateau-or transition-colors">Confidentialité</Link>
            <Link href="/cgv" className="hover:text-chateau-or transition-colors">CGV</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}