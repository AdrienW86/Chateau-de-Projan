"use client";

import Image from "next/image";
import Link from "next/link";

export default function ArtDomainePage() {
  return (
    <main className="w-full bg-chateau-anthracite text-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-chateau-or block font-medium">
            Immersion Culturelle & Naturelle
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl tracking-wide leading-tight">
            L'Esprit d'Art & <br />
            <span className="italic font-normal text-chateau-pierre">Le Domaine Historique</span>
          </h1>
          <div className="w-12 h-[1px] bg-chateau-or/60 mx-auto my-6" />
          <p className="font-sans text-base text-chateau-pierre/80 leading-relaxed tracking-wide max-w-2xl mx-auto">
            Bienvenue au Château de Projan. Niché dans les vallons préservés du Gers, notre domaine du XVIIe siècle est un trait d'union suspendu entre la majesté de la nature gasconne et le dialogue vibrant de l'art contemporain.
          </p>
        </div>

        {/* SECTION 1 : LE DOMAINE (Focus SEO Parc & Nature) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative h-[450px] sm:h-[600px] w-full shadow-2xl">
            <Image 
              src="/image6.jpg" 
              alt="La façade historique du Château de Projan dans le Gers à l'heure dorée"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-xs tracking-widest uppercase text-chateau-or font-semibold">Un Écrin de Verdure</span>
            <h2 className="font-serif text-3xl text-white tracking-wide">Le Parc & L'Horizon Gascon</h2>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Flânez le long de <strong>l'Allée des Cèdres</strong>, perdez-vous dans les chemins secrets de notre parc arboré ou profitez d’un instant suspendu face aux reflets infinis de notre <strong>piscine miroir</strong> au lever du jour. 
            </p>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Ici, le paysage s'ouvre sur la nature sauvage du Sud-Ouest, offrant une déconnexion totale et exclusive pour les voyageurs en quête de sérénité et de luxe discret.
            </p>
            <div className="pt-4">
              <Link href="/photos" className="inline-block font-sans text-xs tracking-widest uppercase border border-chateau-or/40 text-chateau-or px-6 py-3 hover:bg-chateau-or hover:text-chateau-anthracite transition-all duration-300">
                Explorer le carnet visuel
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION 2 : L'ESPRIT D'ART (Focus SEO Galerie & Art Contemporain) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
          <div className="lg:col-span-5 space-y-6 lg:order-2">
            <span className="font-sans text-xs tracking-widest uppercase text-chateau-or font-semibold">Maison de Collectionneur</span>
            <h2 className="font-serif text-3xl text-white tracking-wide">Quand l'Histoire Dialogue avec le Présent</h2>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Le Château de Projan n'est pas qu'un simple hôtel de luxe ; c'est un lieu d’expression. Au détour d'un couloir ou sous les boiseries d'époque du grand salon, les œuvres d'art contemporain rigoureusement sélectionnées interpellent le regard et éveillent l'esprit.
            </p>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Chaque sculpture, chaque toile et chaque ornement précieux raconte une histoire et fait de votre séjour une expérience esthétique singulière, digne d'une galerie d'art privée.
            </p>
          </div>
          <div className="lg:col-span-7 relative h-[450px] sm:h-[600px] w-full shadow-2xl lg:order-1">
            <Image 
              src="/couloir.avif" 
              alt="Œuvres d'art contemporain et boiseries d'époque dans le Château de Projan"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* APPAREIL DE RÉSERVATION & RENTABILITÉ */}
        <div className="border border-chateau-pierre/10 p-8 sm:p-12 text-center max-w-4xl mx-auto bg-black/20 space-y-6">
          <h3 className="font-serif text-2xl text-white">Vivez l'Expérience Projan</h3>
          <p className="font-sans text-sm text-chateau-pierre/70 max-w-xl mx-auto">
            Privatisation pour événements d'exception, retraites inspirantes ou séjours confidentiels au cœur de la Gascogne.
          </p>
          <button className="font-sans text-xs tracking-widest uppercase bg-chateau-or text-chateau-anthracite font-semibold px-8 py-4 hover:bg-white transition-colors duration-300 cursor-pointer">
            Réserver votre séjour
          </button>
        </div>

      </div>
    </main>
  );
}