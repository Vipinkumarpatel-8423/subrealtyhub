
import GalleryHero from "@/components/gallery/GalleryHero";
import PrimeLocationAdvantages from "@/components/gallery/PrimeLocationAdvantages";
import FullWidthProjectImages from "@/components/gallery/FullWidthProjectImages";
import DholeraProjects from "@/components/home/DholeraProjects";

export const metadata = {
  title: "Gallery | SAB Realty Hub",
  description:
    "Explore Dholera Smart City project images, prime location advantages, infrastructure and master plans with SAB Realty Hub.",
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />

      <PrimeLocationAdvantages />

      {/* Existing projects component */}
      <DholeraProjects />

      {/* Reusable master plan images */}
      <FullWidthProjectImages />
    </main>
  );
}
