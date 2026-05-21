"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-chateau-anthracite/10 backdrop-blur-md border-b border-chateau-pierre/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* LOGO / NOM DU CHÂTEAU */}
        <Link href="/" className="group flex flex-col items-start justify-center">
          <Image 
            src="/logo-chateau.png" 
            alt="Logo Château de Projan"
            width={140} 
            height={50}  
            className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            priority 
          />
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden md:flex items-center space-x-8 font-sans text-xs tracking-widest uppercase text-chateau-pierre/90">
          <Link href="/chambres" className="hover:text-chateau-or transition-colors duration-200">
            Les Chambres
          </Link>
          <Link href="/photos" className="hover:text-chateau-or transition-colors duration-200">
            Galerie photos
          </Link>
          <Link href="/restaurant" className="hover:text-chateau-or transition-colors duration-200">
            La Table
          </Link>
          <Link href="/art" className="hover:text-chateau-or transition-colors duration-200">
            L'Art & Le Domaine
          </Link>
          <Link href="/contact" className="hover:text-chateau-or transition-colors duration-200">
            Contact
          </Link>
          
          {/* BOUTON DE RÉSERVATION */}
          <Link 
            href="#reservation" 
            className="border border-chateau-or px-5 py-2.5 text-chateau-or hover:bg-chateau-or hover:text-chateau-anthracite transition-all duration-300 ease-in-out font-medium"
          >
            Réserver
          </Link>
        </nav>

        {/* BOUTON MENU MOBILE (HAMBURGER) - BLANC & CURSEUR MAIN */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-2 cursor-pointer"
          aria-label="Ouvrir le menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>

      </div>

      {/* MENU MOBILE DÉROULANT - EFFET VERRE DÉPOLI HAUT DE GAMME */}
      <div 
        className={`md:hidden absolute top-24 left-0 w-full bg-chateau-anthracite/90 backdrop-blur-xl border-b border-chateau-pierre/10 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <nav className="flex flex-col p-8 space-y-6 font-sans text-sm tracking-widest uppercase text-center text-chateau-pierre">
          <Link href="/chambres" onClick={() => setIsOpen(false)} className="hover:text-chateau-or transition-colors">
            Les Chambres
          </Link>
          <Link href="/restaurant" onClick={() => setIsOpen(false)} className="hover:text-chateau-or transition-colors">
            La Table
          </Link>
          <Link href="/art" onClick={() => setIsOpen(false)} className="hover:text-chateau-or transition-colors">
            L'Art & Le Domaine
          </Link>
           <Link href="/photos" className="hover:text-chateau-or transition-colors duration-200">
            Galerie photos
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-chateau-or transition-colors">
            Contact
          </Link>
          <Link 
            href="#reservation" 
            onClick={() => setIsOpen(false)}
            className="bg-chateau-or text-chateau-anthracite py-3.5 text-xs font-semibold tracking-widest uppercase transition-transform active:scale-98"
          >
            Réserver mon séjour
          </Link>
        </nav>
      </div>
    </header>
  );
}