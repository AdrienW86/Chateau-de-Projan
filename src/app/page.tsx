// Remplace l'ancien import par celui-là :
import Hero from "../components/Hero";
import HeroHistrory from "../components/HeroHistory"
import AmenitiesGrid from "../components/AmenitiesGrid";
import ExperiencesSlider from "../components/ExperiencesSlider";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroHistrory />
      <AmenitiesGrid />
      <ExperiencesSlider />
    </>
  );
}