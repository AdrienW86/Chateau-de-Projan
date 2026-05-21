"use client";

import Image from "next/image";
import Link from "next/link";

export default function SuitesSalonsPage() {
  return (
    <main className="w-full bg-chateau-anthracite text-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-chateau-or block font-medium">
            Atmosphères Privées & Volupté
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl tracking-wide leading-tight">
            Suites d'Exception & <br />
            <span className="italic font-normal text-chateau-pierre">Salons Feutrés</span>
          </h1>
          <div className="w-12 h-[1px] bg-chateau-or/60 mx-auto my-6" />
          <p className="font-sans text-base text-chateau-pierre/80 leading-relaxed tracking-wide max-w-2xl mx-auto">
            Passer une nuit au Château de Projan, c'est s'offrir un refuge hors du temps. Nos suites et espaces de repos allient avec poésie le confort moderne le plus exigeant et le charme intemporel des demeures de caractère.
          </p>
        </div>

        {/* SECTION 1 : LA SUITE ROYALE (Focus Grande Chambre de Luxe) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative h-[450px] sm:h-[600px] w-full shadow-2xl">
            <Image 
              src="/chambre13.avif" 
              alt="La Suite Royale de luxe au Château de Projan dans le Gers"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-xs tracking-widest uppercase text-chateau-or font-semibold">Le Sommet du Confort</span>
            <h2 className="font-serif text-3xl text-white tracking-wide">La Suite Royale</h2>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Véritable joyau du domaine, la <strong>Suite Royale</strong> est un sanctuaire feutré conçu pour les esthètes. Elle enveloppe ses hôtes dans un écrin d'étoffes d'exception et de mobilier choisi avec soin, offrant une vue imprenable sur le parc historique.
            </p>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Chaque détail a été pensé pour insuffler une élégance calme : draps de lin précieux, matières nobles et salle de bain privative monumentale où se mêlent l'art du bain et sérénité.
            </p>
            <div className="pt-4">
              <Link href="/photos" className="inline-block font-sans text-xs tracking-widest uppercase border border-chateau-or/40 text-chateau-or px-6 py-3 hover:bg-chateau-or hover:text-chateau-anthracite transition-all duration-300">
                Parcourir la galerie photo
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION COLLECTION : LE NUANCIER DES CHAMBRES (Mosaïque de style) */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-sans text-xs tracking-widest uppercase text-chateau-or font-medium">Une Identité Propre</span>
            <h2 className="font-serif text-2xl text-white tracking-wide">Des Univers Chromatiques Uniques</h2>
            <p className="font-sans text-xs text-chateau-pierre/70">
              Chaque chambre du château possède sa propre palette poétique, pensée comme une œuvre d'art à part entière.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Chambre Blanche */}
            <div className="bg-black/20 border border-chateau-pierre/5 overflow-hidden group">
              <div className="relative h-80 w-full">
                <Image 
                  src="/chambre.avif" 
                  alt="La Chambre Blanche, minimalisme et luxe dans le Gers" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-lg text-white">La Chambre Blanche</h3>
                <p className="font-sans text-xs text-chateau-pierre/80 leading-relaxed">
                  Un espace d'épure et de clarté absolue, idéal pour apaiser l'esprit et capturer la lumière pure du Sud-Ouest.
                </p>
              </div>
            </div>

            {/* Chambre Indigo */}
            <div className="bg-black/20 border border-chateau-pierre/5 overflow-hidden group">
              <div className="relative h-80 w-full">
                <Image 
                  src="/chambre8.avif" 
                  alt="La Suite Indigo du château, décoration haut de gamme" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-lg text-white">La Suite Indigo</h3>
                <p className="font-sans text-xs text-chateau-pierre/80 leading-relaxed">
                  Profondeur des nuances bleutées et atmosphère enveloppante pour des nuits d'un calme souverain.
                </p>
              </div>
            </div>

            {/* Chambre Anthracite */}
            <div className="bg-black/20 border border-chateau-pierre/5 overflow-hidden group">
              <div className="relative h-80 w-full">
                <Image 
                  src="/chambre6.avif" 
                  alt="Chambre Anthracite contemporaine dans un château historique" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-lg text-white">La Chambre Anthracite</h3>
                <p className="font-sans text-xs text-chateau-pierre/80 leading-relaxed">
                  L'alliance audacieuse de la modernité ténébreuse et du cachet des pierres et boiseries d'époque.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 : LES SALONS (Focus Détente & Vie au château) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
          <div className="lg:col-span-5 space-y-6 lg:order-2">
            <span className="font-sans text-xs tracking-widest uppercase text-chateau-or font-semibold">Espaces Partagés</span>
            <h2 className="font-serif text-3xl text-white tracking-wide">Le Grand Salon & Le Coin Piano</h2>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Au-delà de votre chambre, le château s'ouvre sur des espaces de vie pensés pour la rêverie. Lisez un ouvrage rare près des fenêtres du grand salon ou laissez-vous emporter par les notes de musique s'échappant du <strong>salon du piano</strong>.
            </p>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Ces pièces de réception, précieusement conservées, sont le cœur battant du domaine où nos hôtes aiment se retrouver pour prolonger la magie des journées gasconnes.
            </p>
          </div>
          <div className="lg:col-span-7 relative h-[450px] sm:h-[550px] w-full shadow-2xl lg:order-1">
            <Image 
              src="/image11.jpg" // Utilisation de l'asset salon du piano répertorié
              alt="Le salon de musique et de piano du Château de Projan"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* BLOC DE RÉSERVATION DIRECTE */}
        <div className="border border-chateau-pierre/10 p-8 sm:p-12 text-center max-w-4xl mx-auto bg-black/20 space-y-6">
          <h3 className="font-serif text-2xl text-white">Réservez Votre Nuit Suspendue</h3>
          <p className="font-sans text-sm text-chateau-pierre/70 max-w-xl mx-auto">
            Chacune de nos chambres et suites offre une expérience de séjour hautement confidentielle. Découvrez la douceur de vivre du Gers.
          </p>
          <button className="font-sans text-xs tracking-widest uppercase bg-chateau-or text-chateau-anthracite font-semibold px-8 py-4 hover:bg-white transition-colors duration-300 cursor-pointer">
            Vérifier les disponibilités
          </button>
        </div>

      </div>
    </main>
  );
}