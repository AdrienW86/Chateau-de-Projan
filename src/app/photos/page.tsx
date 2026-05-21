"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  { id: "all", label: "Toutes les vues" },
  { id: "domaine", label: "Le Domaine & Parc" },
  { id: "suites", label: "Suites & Salons" },
  { id: "art", label: "L'Esprit d'Art" },
  { id: "table", label: "L'Art de la Table" },
];

const photos = [
  {
    id: 1,
    src: "/image6.jpg", 
    alt: "La façade du Château à l'heure dorée",
    category: "domaine",
    size: "large", 
    caption: "La majestueuse façade XVIIe siècle baignée par la lumière du Gers."
  },
  {
    id: 2,
    src: "/couloir.avif",
    alt: "Perspectives",
    category: "art",
    size: "tall", 
    caption: "Quand l'art contemporain dialogue avec les boiseries d'époque."
  },
  {
    id: 3,
    src: "/chambre13.avif",
    alt: "La Suite Royale",
    category: "suites",
    size: "normal",
    caption: "Un refuge feutré alliant confort moderne et étoffes d'exception."
  },
  {
    id: 4,
    src: "/image18.jpg",
    alt: "Dégustation d'Armagnac précieux",
    category: "art",
    size: "normal",
    caption: "Secrets partagés autour des plus grands millésimes de la maison."
  },
  {
    id: 5,
    src: "/piscine.avif",
    alt: "La piscine miroir au lever du jour",
    category: "domaine",
    size: "wide", 
    caption: "Lignes épurées et reflets infinis sur les vallons gascons."
  },
  {
    id: 6,
    src: "/fleurs.avif",
    alt: "Arrangement floral",
    category: "art",
    size: "normal",
    caption: "Parc fleuri et ambiance végétale harmonieuse."
  },
  {
    id: 7,
    src: "/cle.avif",
    alt: "Ornements et mobilier",
    category: "art",
    size: "normal",
    caption: "Meubles anciens et ornements précieux."
  },
  {
    id: 8,
    src: "/image26.jpg",
    alt: "Dressage de la table gastronomique",
    category: "table",
    size: "large", 
    caption: "L'élégance du détail, prélude à un voyage culinaire unique."
  },
  {
    id: 12,
    src: "/chambre.avif",
    alt: "La Chambre Blanche",
    category: "suites",
    size: "tall",
    caption: "Épure et sérénité au cœur de la chambre blanche."
  },
  {
    id: 13,
    src: "/chambre3.avif",
    alt: "Chambre Azur",
    category: "suites",
    size: "normal",
    caption: "Douceur des nuances bleutées de la chambre azur."
  },
  {
    id: 14,
    src: "/chambre6.avif",
    alt: "Chambre Anthracite",
    category: "suites",
    size: "normal",
    caption: "L'élégance ténébreuse et contemporaine de la chambre anthracite."
  },
  {
    id: 22,
    src: "/image4.jpg",
    alt: "Déjeuner champêtre",
    category: "domaine",
    size: "wide",
    caption: "La grande table du jardin sous l'ombre des arbres."
  },
  {
    id: 15,
    src: "/chambre8.avif",
    alt: "Chambre Indigo",
    category: "suites",
    size: "tall",
    caption: "Profondeur et caractère dans la chambre indigo."
  },
  {
    id: 19,
    src: "/douche.avif",
    alt: "L'art du bain - Écarlate",
    category: "suites",
    size: "normal",
    caption: "La salle de bain de la suite écarlate."
  },
  {
    id: 20,
    src: "/douche2.avif",
    alt: "L'art du bain - Indigo",
    category: "suites",
    size: "normal",
    caption: "La salle de bain de la suite indigo."
  },
  {
    id: 23,
    src: "/image5.jpg",
    alt: "L'Allée des Cèdres",
    category: "domaine",
    size: "tall",
    caption: "La grande allée historique du domaine."
  },
  {
    id: 24,
    src: "/image19.jpg",
    alt: "Le Parc du Château",
    category: "domaine",
    size: "large",
    caption: "Perspectives verdoyantes sur le parc arboré."
  },
  {
    id: 21,
    src: "/douche4.avif",
    alt: "L'art du bain - Azur",
    category: "suites",
    size: "normal",
    caption: "La salle de bain de la suite azure."
  },
  {
    id: 25,
    src: "/image37.jpg",
    alt: "Le Court de Tennis",
    category: "domaine",
    size: "normal",
    caption: "Le terrain de tennis du domaine."
  },
  {
    id: 26,
    src: "/image34.jpg",
    alt: "Flânerie",
    category: "domaine",
    size: "wide",
    caption: "Les chemins secrets du château."
  },
  {
    id: 27,
    src: "/vue2.avif",
    alt: "L'Horizon Gascon",
    category: "domaine",
    size: "tall",
    caption: "Vue extérieure apaisante sur la nature environnante."
  },
  {
    id: 28,
    src: "/image42.jpg",
    alt: "Soirée plancha",
    category: "table",
    size: "normal", // Alternance de taille pour le coin repas
    caption: "Convivialité autour de la plancha en fin de journée."
  },
  {
    id: 29,
    src: "/image39.jpg",
    alt: "Grillade en soirée",
    category: "table",
    size: "normal",
    caption: "L'authenticité des saveurs d'été au domaine."
  },
  {
    id: 32,
    src: "/image9.jpg",
    alt: "La grande table de réception",
    category: "domaine",
    size: "wide", // Donne de l'espace à la table de réception
    caption: "La grande salle prête pour les célébrations majeures."
  },
  {
    id: 30,
    src: "/image11.jpg",
    alt: "Entremet soigné",
    category: "table",
    size: "tall",
    caption: "Dessert raffiné et signatures sucrées."
  },
  {
    id: 31,
    src: "/image13.jpg",
    alt: "Foie gras maison",
    category: "table",
    size: "normal",
    caption: "Tradition et excellence du foie gras maison."
  },
  {
    id: 33,
    src: "/image10.jpg",
    alt: "La grande piscine",
    category: "domaine",
    size: "large", // Une autre pièce maîtresse paysagère
    caption: "Bassin de fraîcheur niché dans son écrin de verdure."
  },
  {
    id: 34,
    src: "/image11.jpg", // Adapté pour éviter le doublon d'asset de la piscine
    alt: "Le salon du piano",
    category: "suites", // Rectifié en suites
    size: "tall",
    caption: "Notes de musique et boiseries feutrées dans le salon du piano."
  }
];

export default function PhotosPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  const filteredPhotos = activeCategory === "all" 
    ? photos 
    : photos.filter(p => p.category === activeCategory);

  return (
    <main className="w-full bg-chateau-anthracite text-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EN-TÊTE POÉTIQUE */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-chateau-or block font-medium">
            Carnet Visuel
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl tracking-wide text-chateau-pierre">
            Le Domaine en <span className="italic font-normal text-white">Lumières</span>
          </h1>
          <div className="w-8 h-[1px] bg-chateau-or/60 mx-auto my-4" />
          <p className="font-sans text-sm text-chateau-pierre/70 leading-relaxed tracking-wide">
            Parcourez l'atmosphère du Château de Projan à travers l'œil de nos artistes et photographes résidents.
          </p>
        </div>

        {/* FILTRES PAR CATÉGORIES */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-6 mb-16 border-b border-chateau-pierre/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-sans text-xs tracking-widest uppercase py-2 px-4 transition-all duration-300 relative cursor-pointer ${
                activeCategory === cat.id 
                  ? "text-chateau-or font-semibold" 
                  : "text-chateau-pierre/50 hover:text-white"
              }`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-chateau-or transition-all duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* GRILLE D'EXPOSITION (Ajustée à 340px pour de plus belles proportions verticales) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[280px] sm:auto-rows-[340px]">
          {filteredPhotos.map((photo) => {
            let gridStyles = "col-span-1 row-span-1";
            if (photo.size === "large") gridStyles = "sm:col-span-2 sm:row-span-2";
            if (photo.size === "tall") gridStyles = "row-span-2";
            if (photo.size === "wide") gridStyles = "sm:col-span-2 row-span-1";

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className={`group relative overflow-hidden bg-black/20 shadow-2xl cursor-zoom-in transition-all duration-700 ease-out border border-chateau-pierre/5 hover:border-chateau-or/30 rounded-none ${gridStyles}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-all duration-1000 ease-out group-hover:scale-105 brightness-[0.85] group-hover:brightness-100"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                />
                
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out space-y-1">
                    <span className="font-sans text-[9px] tracking-[0.2em] text-chateau-or uppercase font-semibold">
                      {categories.find(c => c.id === photo.category)?.label}
                    </span>
                    <h3 className="font-serif text-xl text-white leading-tight tracking-wide">
                      {photo.alt}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MODAL / LIGHTBOX */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 bg-black/98 z-50 flex flex-col justify-center items-center p-4 sm:p-10"
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-6 right-6 text-chateau-pierre hover:text-white text-2xl font-sans tracking-widest transition-colors cursor-pointer"
              onClick={() => setSelectedPhoto(null)}
            >
              ✕ <span className="text-xs uppercase tracking-widest hidden sm:inline-block ml-2">Fermer</span>
            </button>

            <div 
              className="relative w-full max-w-5xl h-[65vh] sm:h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div 
              className="mt-6 text-center max-w-xl space-y-2 px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="font-serif text-xl text-white tracking-wide">{selectedPhoto.alt}</h2>
              <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed italic">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}