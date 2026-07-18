import { useParams } from "react-router-dom";
import { PROJECTS } from "./data/projects";
import Seo from "./components/Seo";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  const PageComponent = project.page;

  return (
    <>
      <Seo
        title={project.title}
        description={project.desc}
        image={new URL(project.image, "https://cwil.vercel.app").href}
        path={`/Projects/${project.slug}`}
      />
      <PageComponent />
    </>
  );
}
