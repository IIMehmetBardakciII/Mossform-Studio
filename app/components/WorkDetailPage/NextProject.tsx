import { Link } from "react-router";
import type { Project } from "~/types/project";
import ImageAnimation from "../Animations/ImageAnimation";
import { buildSrcSet } from "~/utility/buildSrcSet";

type NextProject = {
  project: Project;
};
const NextProject = ({ project }: NextProject) => {
  return (
    <div className="min-h-screen w-full container flex flex-col gap-8 items-center justify-center md:py-gapSectionMobile py-14">
      <span className="w-full h-px bg-linegray inline-block" />
      <Link
        to={`/works/${project.slug}`}
        className="flex items-center gap-2 body-s hover:underline"
      >
        Go To Next Project <img src="/icons/arrowRight.svg" alt="arrow" />
      </Link>
      <h2 className="text-black display-xl capitalize max-md:text-center">
        {project.name}
      </h2>
      <Link to={`/works/${project.slug}`}>
        <ImageAnimation>
          <div className="md:max-w-[986px] bg-black  mx-auto w-full md:max-h-[450px] max-md:aspect-272/326">
            <img
              srcSet={buildSrcSet(project.home_mobile, project.home)}
              sizes="(max-width: 768px) 672px, 1344px"
              loading="lazy"
              src={project.home}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </ImageAnimation>
      </Link>
    </div>
  );
};

export default NextProject;
