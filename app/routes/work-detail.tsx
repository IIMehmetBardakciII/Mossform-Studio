import { projects } from "~/constant";
import type { Route } from "../+types/root";
import Hero from "~/components/WorkDetailPage/Hero";
import Galery from "~/components/WorkDetailPage/Galery";
import NextProject from "~/components/WorkDetailPage/NextProject";
import Footer from "~/components/Utilities/Footer";
import FixedNav from "~/components/Utilities/FixedNav";

export const meta: Route.MetaFunction = ({ params }) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return [
      { title: "Mossform Architecture | Project Not Found" },
      {
        name: "description",
        content: "The requested architectural project could not be found.",
      },
    ];
  }

  return [
    {
      title: `Mossform Architecture | ${project.name}`,
    },
    {
      name: "description",
      content: `${project.info.projectType} located in ${project.info.location}, designed by Mossform Architecture as a calm, nature-driven space rooted in biophilic principles.`,
    },
    {
      property: "og:title",
      content: `Mossform Architecture | ${project.name}`,
    },
    {
      property: "og:description",
      content: `${project.info.projectType} in ${project.info.location}, designed as a quiet and intentional architectural space connected to nature.`,
    },
    {
      property: "og:type",
      content: "article",
    },
  ];
};

const WorkDetailPage = ({ params }: Route.ComponentProps) => {
  const project = projects.find((p) => p.slug === params.slug);

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length]; // if current index 2 we currentIndex+1 = 3%13 = 3 but if we last index 12 it will be 13%13=0

  if (!project) {
    return <p>Project not found</p>;
  }
  return (
    <>
      {/* Page Content */}
      <main>
        <Hero project={project} />
        <Galery project={project} />
        <NextProject project={nextProject} />
      </main>
      <Footer />
      <FixedNav />
    </>
  );
};

export default WorkDetailPage;
