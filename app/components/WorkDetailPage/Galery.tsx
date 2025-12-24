import type { Project } from "~/types/project";
import ImageAnimation from "../Animations/ImageAnimation";
import { buildSrcSet } from "~/utility/buildSrcSet";

type GaleryProps = {
  project: Project;
};



const GaleryImageComponent = ({
  imageDesktop,
  imageMobile,
}: {
  imageDesktop: string;
  imageMobile?: string;
}) => {
  return (
    <ImageAnimation>
      <img
        src={imageDesktop}
        loading="lazy"
        alt="images"
        className=" object-cover w-full h-full"
        srcSet={buildSrcSet(imageMobile, imageDesktop)}
        sizes="(max-width: 768px) 672px, 1344px"
      />
    </ImageAnimation>
  );
};
const Galery = ({ project }: GaleryProps) => {
  return (
    <div className=" container w-full h-full overflow-hidden md:mt-gapSectionDesktop mt-gapSectionMobile">
      <div className="flex max-md:flex-col max-md:gap-11 w-full gap-5">
        {/*Bath Image  */}
        <div className="flex-1 md:aspect-734/730 aspect-272/408 max-md:max-h-[408px]">
          <GaleryImageComponent
            imageDesktop={project.bath!}
            imageMobile={project.bath_mobile}
          />
        </div>
        {/*Corridor Image  */}
        <div
          className="md:flex-1 max-md:w-full max-md:h-[300px]
 md:aspect-734/417 aspect-square md:max-h-[417px]"
        >
          <GaleryImageComponent
            imageDesktop={project.corridor!}
            imageMobile={project.corridor_mobile}
          />
        </div>
      </div>
      {/*Bed Image*/}
      <div className="w-full   md:h-dvh   mt-gapSectionMobile max-md:mt-11 max-md:aspect-square max-md:max-h-[300px]">
        <GaleryImageComponent
          imageDesktop={project.bed!}
          imageMobile={project.bed_mobile}
        />
      </div>

      {/* Testimonial */}
      <div className="h-dvh w-full  flex flex-col justify-center items-center my-gapSectionMobile">
        <div className="max-w-[985px] flex flex-col gap-8">
          <span className="body-s text-gray">
            {project.info.testimonials.name}
          </span>
          <p className="body-base text-black whitespace-pre-line">
            {project.info.testimonials.opinion}
          </p>
        </div>
      </div>
      {/* Lounge & Kitchen Images */}
      <div className="flex gap-5 max-md:flex-col max-md:gap-11">
        {/* Lounge Image */}
        <div className="flex-1 md:aspect-734/730 aspect-square max-md:max-h-[408px]">
          <GaleryImageComponent
            imageDesktop={project.lounge!}
            imageMobile={project.lounge_mobile}
          />
        </div>
        {/* Kitchen Image */}
        <div className="flex-1 md:aspect-734/730 aspect-square max-md:max-h-[408px]">
          <GaleryImageComponent
            imageDesktop={project.kitchen!}
            imageMobile={project.kitchen_mobile}
          />
        </div>
      </div>
    </div>
  );
};

export default Galery;
