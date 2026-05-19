"use client";

import { useEffect, useState, useRef } from "react";

const VIDEOS = [
  "/projan1.mp4",
  "/projan2.mp4",
  "/projan3.mp4"
];

interface HeroProps {
  fadeDuration?: number; // en secondes
  clipDuration?: number; // en secondes
}

export default function Hero({ fadeDuration = 1.5, clipDuration = 7 }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // 1. Gestion de l'intervalle avec ton calcul parfait
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % VIDEOS.length);
    }, (clipDuration - fadeDuration) * 1000); 

    return () => clearInterval(interval);
  }, [clipDuration, fadeDuration]);

  // 2. Forcer la lecture et la remise à zéro de la vidéo active
  useEffect(() => {
    const activeVideo = videoRefs.current[currentIndex];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(() => {});
    }
  }, [currentIndex]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-chateau-anthracite overflow-hidden">
      
      {/* ZONE DES VIDÉOS SUPERPOSÉES */}
      <div className="absolute inset-0 z-0 bg-chateau-anthracite">
        {VIDEOS.map((video, index) => (
          <video
            key={index}
            ref={(el) => { videoRefs.current[index] = el; }}
            src={video}
            muted
            loop={false} // Reste à false pour éviter les redémarrages sauvages
            playsInline
            preload="auto"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transition: `opacity ${fadeDuration}s ease-in-out`,
            }}
            className="absolute inset-0 w-full h-full object-cover object-center brightness-75 scale-105"
          />
        ))}
        
        {/* Voile sombre fixe pour garantir le contraste du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-chateau-anthracite/40 via-transparent to-chateau-anthracite/60 z-10" />
      </div>

      {/* CONTENU TEXTE (z-20) */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto space-y-6 mt-16">
        <span className="text-chateau-or tracking-[0.3em] uppercase text-xs sm:text-sm font-semibold block bg-chateau-anthracite/30 backdrop-blur-sm w-fit mx-auto px-4 py-1.5 rounded-sm border border-chateau-or/20">
          Demeure de prestige au cœur du Gers
        </span>
        
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-chateau-pierre leading-tight drop-shadow-md">
          Château de Projan
        </h1>
        
        <p className="font-sans text-chateau-pierre/90 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
          Une parenthèse intemporelle où l'histoire des vieilles pierres rencontre l'audace de l'art contemporain, face à la chaîne des Pyrénées.
        </p>
        
        {/* BOUTONS D'ACTION (CTA) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#reservation" 
            className="w-full sm:w-auto bg-chateau-or hover:bg-chateau-or/90 text-chateau-anthracite font-sans text-xs tracking-widest uppercase px-8 py-4 font-semibold transition-all duration-300 ease-in-out shadow-lg hover:-translate-y-0.5"
          >
            Réserver votre séjour
          </a>
          <a 
            href="#decouvrir" 
            className="w-full sm:w-auto border border-chateau-pierre/40 hover:border-chateau-pierre bg-chateau-pierre/5 hover:bg-chateau-pierre/10 text-chateau-pierre font-sans text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300 ease-in-out backdrop-blur-sm"
          >
            Explorer le domaine
          </a>
        </div>
      </div>

      {/* PETIT INDICATEUR DE SCROLL EN BAS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center space-y-2 opacity-70 animate-bounce">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-chateau-pierre">Découvrir</span>
        <div className="w-px h-8 bg-chateau-or" />
      </div>

    </section>
  );
}