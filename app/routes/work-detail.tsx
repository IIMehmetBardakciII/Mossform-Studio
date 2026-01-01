import { projects } from "~/constant";
import type { Route } from "../+types/root";
import Hero from "~/components/WorkDetailPage/Hero";
import Galery from "~/components/WorkDetailPage/Galery";
import NextProject from "~/components/WorkDetailPage/NextProject";
import Footer from "~/components/Utilities/Footer";
import FixedNav from "~/components/Utilities/FixedNav";

const WorkDetailPage = ({ params }: Route.ComponentProps) => {
  const project = projects.find((p) => p.slug === params.slug);

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length]; // if current index 2 we currentIndex+1 = 3%13 = 3 but if we last index 12 it will be 13%13=0

  if (!project) {
    return <p>Project not found</p>;
  }
  return (
    <>
      {/* SEO */}
      <title>{`Mossform Architecture | ${project.name}`}</title>

      <meta
        name="description"
        content={`${project.info.projectType} located in ${project.info.location}, designed by Mossform Architecture as a calm, nature-driven space rooted in biophilic principles.`}
      />

      <meta
        property="og:title"
        content={` Mossform Architecture | ${project.name}`}
      />

      <meta
        property="og:description"
        content={`${project.info.projectType} in ${project.info.location}, designed as a quiet and intentional architectural space connected to nature.`}
      />

      <meta property="og:type" content="article" />

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
