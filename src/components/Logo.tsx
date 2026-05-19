export default function Logo() {
  return (
    <a href="/" className="group flex items-center gap-3.5 focus:outline-none">
      {/* L'EMBLÈME GRAPHIQUE (Le blason moderne) */}
      <div className="relative flex h-10 w-10 items-center justify-center border border-chateau-or/45 transition-all duration-500 ease-in-out group-hover:border-chateau-or group-hover:rotate-45">
        {/* Un carré imbriqué pour le clin d'œil à l'art contemporain */}
        <div className="absolute h-6 w-6 border border-chateau-pierre/30 transition-all duration-500 ease-in-out group-hover:scale-90 group-hover:-rotate-45" />
        
        {/* Initiales au centre */}
        <span className="font-serif text-[11px] tracking-widest text-chateau-or font-medium translate-y-[0.5px]">
          CP
        </span>
      </div>

      {/* LE NOM DU CHÂTEAU */}
      <div className="flex flex-col">
        <span className="font-serif text-lg sm:text-xl uppercase tracking-[0.25em] text-chateau-pierre transition-colors duration-300 group-hover:text-chateau-or font-light leading-none">
          Château
        </span>
        <span className="font-sans text-[10px] uppercase tracking-[0.45em] text-chateau-or font-semibold mt-1.5 leading-none">
          de Projan
        </span>
      </div>
    </a>
  );
}