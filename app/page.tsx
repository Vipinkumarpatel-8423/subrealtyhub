import HeroSection from "@/components/home/HeroSection";
import DholeraCategories from "@/components/home/DholeraCategories" 
import DholeraProjects from "@/components/home/DholeraProjects"
import AboutSection from "@/components/home/AboutSection";
import WhoWeAre from "@/components/home/WhoWeAre";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";
import DholeraNewsSection from "@/components/home/DholeraNewsSection";


export default function Home() {
  return (
    <main>
      <HeroSection />

       <DholeraCategories />

        <DholeraProjects />

         <AboutSection />

         <WhoWeAre />
         <Testimonials />

         <ContactSection />

         <DholeraNewsSection />
    </main>
  );
}