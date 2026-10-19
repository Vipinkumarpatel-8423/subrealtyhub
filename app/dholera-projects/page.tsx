import DholeraProjects from "@/components/home/DholeraProjects";
import AllProjectsIntro from "@/components/projects/AllProjectsIntro";
export const metadata = {
  title: "All Dholera Projects | SAB Realty Hub",
  description:
    "Explore residential, commercial and investment property projects in Dholera Smart City with SAB Realty Hub.",
};

export default function AllProjectsPage() {
  return (
    <main>
      <AllProjectsIntro />

      {/* Existing projects component — no changes needed */}

      <DholeraProjects />
   
    </main>
  );
}