"use client";

import Image from "next/image";
import Link from "next/link";

export default function LaTablePage() {
  return (
    <main className="w-full bg-chateau-anthracite text-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-chateau-or block font-medium">
            Haute Gastronomie Gasconne
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl tracking-wide leading-tight">
            L'Art de <span className="italic font-normal text-chateau-pierre">la Table</span>
          </h1>
          <div className="w-12 h-[1px] bg-chateau-or/60 mx-auto my-6" />
          <p className="font-sans text-base text-chateau-pierre/80 leading-relaxed tracking-wide max-w-2xl mx-auto">
            Célébrer la Gascogne, c'est d'abord honorer sa terre. Notre table est une ode au raffinement, à la convivialité et au savoir-faire ancestral du Sud-Ouest, sublimée par une mise en scène poétique.
          </p>
        </div>

        {/* SECTION 1 : LA GASTRONOMIE (Focus SEO Table & Plats) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative h-[450px] sm:h-[600px] w-full shadow-2xl">
            <Image 
              src="/image26.jpg" 
              alt="Dressage de la table gastronomique et art de la table au Château de Projan"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-xs tracking-widest uppercase text-chateau-or font-semibold">L'Égance du Détail</span>
            <h2 className="font-serif text-3xl text-white tracking-wide">Une Expérience Culinaire Unique</h2>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Du raffinement d'un <strong>entremet soigné</strong> à l'authenticité d'un <strong>foie gras maison</strong>, chaque assiette servie au château met à l'honneur les produits d’exception de nos producteurs locaux gersois.
            </p>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Le soir venu, la grande table de réception s'illumine sous les lustres, promettant des partages mémorables où l'esthétique visuelle rencontre la perfection gustative.
            </p>
          </div>
        </div>

        {/* SECTION DÉGUSTATION & CONVIVIALITÉ (Focus SEO Armagnac & Plancha) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-black/20 border border-chateau-pierre/5 overflow-hidden group">
            <div className="relative h-72 w-full">
              <Image 
                src="/image18.jpg" 
                alt="Dégustation de vieux Armagnacs millésimés au château" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-serif text-lg text-chateau-or">L'Or de Gascogne</h3>
              <p className="font-sans text-xs text-chateau-pierre/80 leading-relaxed">
                Partagez les secrets de nos précieux flacons lors d'une dégustation d'Armagnac millésimé dans l'intimité du salon.
              </p>
            </div>
          </div>

          <div className="bg-black/20 border border-chateau-pierre/5 overflow-hidden group">
            <div className="relative h-72 w-full">
              <Image 
                src="/image42.jpg" 
                alt="Soirée plancha et grillades dans les jardins du château" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-serif text-lg text-chateau-or">Douceur des Soirées d'Été</h3>
              <p className="font-sans text-xs text-chateau-pierre/80 leading-relaxed">
                Profitez d'une soirée plancha ou d'une grillade en plein air, sous les arbres protecteurs du domaine.
              </p>
            </div>
          </div>

          <div className="bg-black/20 border border-chateau-pierre/5 overflow-hidden group">
            <div className="relative h-72 w-full">
              <Image 
                src="/image4.jpg" 
                alt="Grande table de jardin d'un château d'hôte de luxe" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-serif text-lg text-chateau-or">Déjeuners Champêtres</h3>
              <p className="font-sans text-xs text-chateau-pierre/80 leading-relaxed">
                La grande table du jardin vous accueille pour des déjeuners baignés par la lumière incomparable du Sud-Ouest.
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center space-y-6 max-w-xl mx-auto pt-8">
          <h3 className="font-serif text-2xl text-white">Réservez Votre Place à Notre Table</h3>
          <p className="font-sans text-sm text-chateau-pierre/70">
            Nos dîners et dégustations sont accessibles sur réservation pour nos résidents et invités exclusifs.
          </p>
          <button className="font-sans text-xs tracking-widest uppercase bg-chateau-or text-chateau-anthracite font-semibold px-8 py-4 hover:bg-white transition-colors duration-300 cursor-pointer">
            Contacter notre service conciergerie
          </button>
        </div>

      </div>
    </main>
  );
}