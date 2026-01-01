import type { Project } from "~/types/project";
import Navbar from "../Utilities/Navbar";
import { buildSrcSet } from "~/utility/buildSrcSet";

type HeroProps = {
  project: Project;
};
const Hero = ({ project }: HeroProps) => {
  return (
    <section className=" relative isolate w-full  h-dvh ">
      <Navbar btnVariation="var1" variation="var1" />

      {/* Info */}
      <div className=" relative z-20 container">
        {/* details */}
        <div className="flex gap-8 max-md:flex-col max-md:gap-4 relative z-50  md:mt-[298px] mt-15">
          {/* Left Side */}
          <div className="flex flex-col gap-8 max-md:gap-4 relative  text-nowrap">
            <div className="flex flex-col gap-2">
              <span className="text-gray display-s">Location</span>
              <span className="body-base font-semibold text-white leading-none max-md:leading-[1.3]">
                {project.info.location}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray display-s">Project Type</span>
              <span className="body-base font-semibold text-white leading-none max-md:leading-[1.3]">
                {project.info.projectType}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray display-s ">Collaborators</span>
              <span className="body-base font-semibold text-white leading-none max-md:leading-[1.3]">
                {project.info.collaborators}
              </span>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex flex-col gap-8 max-md:gap-4 relative   w-full">
            <div className="flex flex-col gap-2">
              <span className="text-gray   display-s">Date Completed</span>
              <span className="body-base font-semibold text-white leading-none max-md:leading-[1.3]">
                {project.info.date}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray display-s">Photography</span>
              <span className="body-base font-semibold text-white leading-none max-md:leading-[1.3]">
                {project.info.photography}
              </span>
            </div>
          </div>
        </div>
        {/* Project name */}
        <div className="relative mt-10 md:mt-6 flex items-center justify-center  ">
          <h1 className="display-xl text-white capitalize md:text-center">
            {project.name}
          </h1>
          <span className="absolute bottom-0 right-0 flex justify-end   gap-2 body-s text-white max-md:hidden">
            Scroll to explore
            <img
              src="/icons/arrowDown.svg"
              alt=""
              aria-hidden="true"
              className="w-2.5 animate-bounce"
            />
          </span>
        </div>
      </div>

      {/* Background image */}
      <div className="absolute w-full h-full z-0 inset-0">
        <div className="w-full h-full bg-[#0B0B0B] opacity-30 absolute" />
        <img
          loading="eager"
          fetchPriority="high"
          src={project.home}
          alt={`${project.name} architectural project by Mossform Architecture in ${project.info.location}`}
          className="object-cover w-full h-full"
          srcSet={buildSrcSet(project.home_mobile, project.home)}
          sizes="(max-width: 768px) 672px, 1344px"
        />
      </div>
    </section>
  );
};

export default Hero;
