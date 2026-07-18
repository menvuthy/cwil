import { useParams } from "react-router-dom";
import { PROJECTS } from "./data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  const PageComponent = project.page;

  return <PageComponent />;
}
