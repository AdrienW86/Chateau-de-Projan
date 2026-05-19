"use client";

import Image from "next/image";

export default function AmenitiesGrid() {
  const amenities = [
    {
      number: "01",
      title: "La Piscine Panoramique",
      description: "Un bassin chauffé à débordement suspendu face aux vallons du Gers, idéal pour les fins de journées dorées.",
      image: "/image1.jpg", // Remplace par ton image
    },
    {
      number: "02",
      title: "Le Parc Séculaire",
      description: "Trois hectares de nature préservée, d'arbres majestueux et de sentiers secrets pour une reconnexion totale.",
      image: "/image2.jpg", // Remplace par ton image
    },
    {
      number: "03",
      title: "Les Salons d'Art",
      description: "Des espaces de vie feutrés où les cheminées historiques côtoient des expositions d’art contemporain sélectionnées.",
      image: "/image3.jpg", // Remplace par ton image
    },
    {
      number: "04",
      title: "La Cave de Dégustation",
      description: "Un écrin intimiste dédié à la découverte des plus grands millésimes d'Armagnac et des trésors viticoles locaux.",
      image: "/image4.jpg", // Remplace par ton image
    },
  ];

  return (
    <section id="domain-explore" className="w-full bg-[#F9F8F6] text-chateau-anthracite py-24 border-b border-chateau-pierre/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EN-TÊTE DE LA SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="max-w-xl space-y-2">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-chateau-or block font-medium">
              Les Espaces Exclusifs
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-chateau-anthracite tracking-wide">
              Le confort d'un resort privé, <br />
              <span className="italic font-normal text-chateau-or/80">l'intimité d'une maison de maître.</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="font-sans text-xs uppercase tracking-widest text-chateau-pierre/80 leading-relaxed">
              Chaque recoin du château a été pensé pour offrir calme, discrétion et émerveillement visuel.
            </p>
          </div>
        </div>

        {/* GRILLE DES ÉQUIPEMENTS AVEC IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-chateau-anthracite/10 divide-y md:divide-y-0 md:divide-x divide-chateau-anthracite/10">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className="group p-6 lg:p-8 flex flex-col justify-between min-h-[400px] transition-colors duration-500 hover:bg-white relative overflow-hidden"
            >
              {/* Conteneur de l'image (Visible sur mobile, et effet de fondu/zoom au survol sur desktop) */}
              <div className="w-full h-48 relative overflow-hidden mb-6 lg:h-0 lg:mb-0 lg:opacity-0 lg:group-hover:h-44 lg:group-hover:opacity-100 lg:group-hover:mb-6 transition-all duration-500 ease-in-out shadow-sm">
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-w-1024px) 100vw, 25vw"
                />
              </div>

              {/* Contenu textuel */}
              <div className="flex flex-col flex-grow justify-between z-10">
                <div className="space-y-4">
                  <span className="font-sans text-xs font-medium tracking-widest text-chateau-or/60 block group-hover:text-chateau-or transition-colors">
                    {amenity.number}
                  </span>
                  <h3 className="font-serif text-xl text-chateau-anthracite tracking-wide">
                    {amenity.title}
                  </h3>
                </div>

                <p className="font-sans text-sm text-chateau-pierre/90 leading-relaxed mt-4">
                  {amenity.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}