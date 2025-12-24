import { projects } from "~/constant";
import type { Route } from "../+types/root";
import Hero from "~/components/WorkDetailPage/Hero";
import Galery from "~/components/WorkDetailPage/Galery";
import NextProject from "~/components/WorkDetailPage/NextProject";
import Footer from "~/components/Utilities/Footer";
import FixedNav from "~/components/Utilities/FixedNav";

const WorkDetailPage = ({ params }: Route.ComponentProps) => {
  const project = projects.find((p) => p.slug === params.slug);

  const currentIndex=projects.findIndex((p)=>p.slug===params.slug);
  const nextProject=projects[(currentIndex+1)%projects.length]; // if current index 2 we currentIndex+1 = 3%13 = 3 but if we last index 12 it will be 13%13=0 


  if (!project) {
    return <p>Project not found</p>;
  }
  return (
    <div >
      <Hero project={project} />
      <Galery project={project}  />
      <NextProject project={nextProject} />
      <Footer />
      <FixedNav/>
    </div>
  );
};

export default WorkDetailPage;
