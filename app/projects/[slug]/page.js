import { projects } from "@/data/projects";
import ProjectView from "@/components/ProjectView";

export default async function ProjectDetails({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="p-20">Project Not Found</div>;

  return <ProjectView {...project} />;
}
