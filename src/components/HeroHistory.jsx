"use client";

import Image from "next/image";

export default function HeroHistory() {
  return (
    <section className="w-full bg-chateau-anthracite text-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* BLOC TEXTE / STORYTELLING (5 colonnes sur 12) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-chateau-or block font-medium">
              L'Âme du Domaine
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-chateau-pierre leading-tight tracking-wide">
              Une demeure d'histoire, <br />
              <span className="italic font-normal text-white">un esprit d'avant-garde.</span>
            </h2>
          </div>
          
          <div className="w-12 h-[1px] bg-chateau-or/50 my-2" />

          <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed tracking-wide text-justify">
            Ancré dans les paysages vallonnés du Gers, le Château de Projan dresse ses pierres séculaires comme un pont entre les époques. Ancien bastion empreint de sérénité, le domaine s’est métamorphosé en un refuge confidentiel où l’art de vivre d'autrefois rencontre la vibration de l’art contemporain.
          </p>
          
          <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed tracking-wide text-justify">
            Ici, le temps suspend son vol. Entre salons feutrés abritant des œuvres d'artistes singuliers et parcs aux arbres majestueux, chaque espace est une invitation à la contemplation, à la volupté et à la découverte d'un luxe authentique et murmuré.
          </p>

          <div className="pt-4">
            <a 
              href="#domain-explore" 
              className="inline-flex font-sans text-xs tracking-widest uppercase text-chateau-or group items-center space-x-3 transition-colors hover:text-white"
            >
              <span>Découvrir le domaine</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </div>
        </div>

        {/* DIAPTYQUE VISUEL ASYMÉTRIQUE (7 colonnes sur 12) */}
        <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative h-[450px] sm:h-[600px] items-center">
          
          {/* Image principale en arrière-plan décalé */}
          <div className="col-span-8 h-full relative overflow-hidden shadow-2xl z-10 group">
            <Image
              src="/image1.jpg"
              alt="Façade historique du Château de Projan"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-w-1024px) 66vw, 40vw"
              priority // Évite les avertissements de performance LCP de Next.js
            />
          </div>

          {/* Deuxième image plus petite, surélevée et superposée à droite */}
          <div className="col-span-4 h-[75%] relative overflow-hidden shadow-2xl z-20 mt-12 group border-l-4 border-chateau-anthracite">
            <Image
              src="/image2.jpg"
              alt="Art contemporain au Château de Projan"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-w-1024px) 33vw, 20vw"
            />
          </div>

          {/* Carrés de texture graphique en fond (Passés en blocs pleins et subtils sous les images) */}
          <div className="absolute top-4 right-12 w-24 h-24 bg-chateau-or/10 backdrop-blur-sm z-0 hidden sm:block pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-32 h-32 bg-chateau-pierre/5 backdrop-blur-sm z-0 hidden sm:block pointer-events-none" />
          
        </div>

      </div>
    </section>
  );
}