"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function ExperiencesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const experiences = [
    {
      tag: "Culture",
      title: "Parcours d'Art Contemporain",
      description: "Flânez dans le parc et les salons pour découvrir une collection privée d'œuvres singulières et de sculptures monumentales.",
      image: "/image4.jpg",
    },
    {
      tag: "Épicurisme",
      title: "Éveil des Sens & Armagnac",
      description: "Une initiation exclusive aux secrets des vieux millésimes de la région, guidée par un sommelier passionné.",
      image: "/image5.jpg",
    },
    {
      tag: "Bien-être",
      title: "Sérénité sous les Cèdres",
      description: "Profitez d'une séance de yoga matinale ou d'un massage sur mesure à l'ombre des arbres séculaires du domaine.",
      image: "/image6.jpg",
    },
    {
      tag: "Découverte",
      title: "Échappée Gasconne",
      description: "Explorez les marchés de producteurs du Gers, les bastides médiévales et les vignobles secrets environnants.",
      image: "/image7.jpg",
    },
  ];

  // Calcul du pourcentage de défilement pour la barre de progression
  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const totalScrollable = scrollWidth - clientWidth;
      if (totalScrollable > 0) {
        const progress = (scrollLeft / totalScrollable) * 100;
        setScrollProgress(progress);
      }
    }
  };

  // Attache l'événement de scroll au chargement
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (slider) slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        
        {/* EN-TÊTE DU SLIDER */}
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

          {/* Flèches de navigation (desktop) */}
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
          className="flex space-x-6 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory overscroll-x-contain"
          style={{ 
            scrollbarWidth: "none", 
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch"
          }}
        >
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="w-[80vw] sm:w-[45vw] lg:w-[30vw] flex-shrink-0 snap-start group select-none"
            >
              <div className="w-full h-[350px] sm:h-[450px] relative overflow-hidden shadow-xl mb-6 pointer-events-none">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-w-640px) 80vw, (max-w-1024px) 45vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chateau-anthracite/40 to-transparent opacity-60" />
              </div>

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

        {/* FEEDBACK VISUEL : BARRE DE PROGRESSION ET MESSAGE SMARTPHONE */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-chateau-pierre/10 pt-6">
          {/* Petite mention discrète pour le mobile */}
          <span className="font-sans text-[10px] tracking-widest uppercase text-chateau-pierre/40 block sm:hidden">
            ← Glissez pour explorer →
          </span>

          {/* La ligne de progression minimale */}
          <div className="w-full sm:w-48 h-[2px] bg-chateau-pierre/10 relative rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-chateau-or transition-all duration-100 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Indicateur numérique discret (ex: 01 / 04) */}
          <span className="hidden sm:block font-sans text-xs tracking-widest text-chateau-pierre/60">
            Art de vivre & Expériences
          </span>
        </div>

      </div>
    </section>
  );
}