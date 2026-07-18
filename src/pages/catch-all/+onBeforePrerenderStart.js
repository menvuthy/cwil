import { PROJECTS } from "../data/projects";

export { onBeforePrerenderStart };

function onBeforePrerenderStart() {
  const staticRoutes = [
    "/",
    "/About",
    "/Research",
    "/Projects",
    "/News",
    "/Contact",
    "/Research/flood-modeling",
    "/Research/water-infrastructure",
    "/Research/water-source",
    "/Research/hydropower",
    "/Research/climate-change",
    "/Research/remote-sensing",
    "/Research/data-science",
    "/Research/geospatial",
  ];

  const projectRoutes = PROJECTS.map((project) => `/Projects/${project.slug}`);

  return [...staticRoutes, ...projectRoutes];
}
