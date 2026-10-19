import AboutIntro from "@/components/about/AboutIntro";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  title: "About Us | SAB Realty Hub",
  description:
    "Learn about SAB Realty Hub, our real estate services, and our commitment to transparent property solutions in Kaithal and Dholera.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutIntro />

      {/* Existing testimonials component */}
      <Testimonials />
    </main>
  );
}