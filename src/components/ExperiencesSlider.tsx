"use client";

import { useRef } from "react";
import Image from "next/image";

export default function ExperiencesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Liste des expériences immersives à vivre au château
  const experiences = [
    {
      tag: "Culture",
      title: "Parcours d'Art Contemporain",
      description: "Flânez dans le parc et les salons pour découvrir une collection privée d'œuvres singulières et de sculptures monumentales.",
      image: "/image4.jpg", // Remplace par ton image
    },
    {
      tag: "Épicurisme",
      title: "Éveil des Sens & Armagnac",
      description: "Une initiation exclusive aux secrets des vieux millésimes de la région, guidée par un sommelier passionné.",
      image: "/image5.jpg", // Remplace par ton image
    },
    {
      tag: "Bien-être",
      title: "Sérénité sous les Cèdres",
      description: "Profitez d'une séance de yoga matinale ou d'un massage sur mesure à l'ombre des arbres séculaires du domaine.",
      image: "/image6.jpg", // Remplace par ton image
    },
    {
      tag: "Découverte",
      title: "Échappée Gasconne",
      description: "Explorez les marchés de producteurs du Gers, les bastides médiévales et les vignobles secrets environnants.",
      image: "/image7.jpg", // Remplace par ton image
    },
  ];

  // Fonctions de navigation pour les flèches du slider
  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-chateau-anthracite text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EN-TÊTE DU SLIDER + BOUTONS DE NAVIGATION */}
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-2">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-chateau-or block font-medium">
              L'Art de Vivre
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-chateau-pierre tracking-wide">
              Vivre l’expérience <br />
              <span className="italic font-normal text-white">Château de Projan</span>
            </h2>
          </div>

          {/* Flèches de navigation (visibles sur desktop) */}
          <div className="hidden md:flex space-x-4">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 border border-chateau-pierre/20 flex items-center justify-center rounded-full text-chateau-pierre hover:text-chateau-or hover:border-chateau-or transition-all duration-300 cursor-pointer"
              aria-label="Précédent"
            >
              ←
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 border border-chateau-pierre/20 flex items-center justify-center rounded-full text-chateau-pierre hover:text-chateau-or hover:border-chateau-or transition-all duration-300 cursor-pointer"
              aria-label="Suivant"
            >
              →
            </button>
          </div>
        </div>

        {/* CONTENEUR DU SLIDER HORIZONTAL */}
        <div 
          ref={sliderRef}
          className="flex space-x-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="w-[85vw] sm:w-[45vw] lg:w-[30vw] flex-shrink-0 snap-start group"
            >
              {/* Image de l'expérience */}
              <div className="w-full h-[380px] sm:h-[450px] relative overflow-hidden shadow-xl mb-6">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-w-640px) 85vw, (max-w-1024px) 45vw, 30vw"
                />
                {/* Overlay sombre discret sur le bas de l'image */}
                <div className="absolute inset-0 bg-gradient-to-t from-chateau-anthracite/40 to-transparent opacity-60" />
              </div>

              {/* Textes sous l'image */}
              <div className="space-y-2">
                <span className="font-sans text-[10px] tracking-widest uppercase text-chateau-or font-semibold block">
                  {exp.tag}
                </span>
                <h3 className="font-serif text-xl text-chateau-pierre tracking-wide group-hover:text-white transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="font-sans text-sm text-chateau-pierre/70 leading-relaxed tracking-wide pt-1">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}