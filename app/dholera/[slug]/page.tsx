
import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";
import { dholeraProjects } from "@/data/dholeraProjects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return dholeraProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function DholeraProjectPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const project = dholeraProjects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
