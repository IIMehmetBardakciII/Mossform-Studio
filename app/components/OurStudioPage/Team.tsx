import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { team } from "~/constant";
import type { MemberType } from "~/types/project";

const Team = () => {
  return (
    <section className="w-full min-h-dvh mt-gapSectionDesktop max-md:gap-gapSectionMobile">
      {/* Header */}
      <div className="relative w-fit">
        <h2 className="text-[40px] text-black font-semibold leading-none font-display">
          Meet the team
        </h2>
        <span className="body-base text-gray absolute  -top-5  right-0 sm:-top-6 sm:-right-14">
          (09)
        </span>
        <span className="text-gray body-s max-md:hidden">
          (Hover and See Our Team)
        </span>
      </div>

      {/* Team */}
     <div className="mt-[108px] max-md:mt-14 flex flex-col gap-3 max-md:gap-8 items-center justify-center">
         {team.map((member)=>(
        <MemberComponent {...member} />
      ))}
     </div>

    </section>
  );
};

export default Team;

const MemberComponent = ({role,name,skill,define,image}:MemberType) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isHover, setIsHover] = useState<boolean>(false);

  useGSAP(() => {
    if (!imageRef.current) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width:768px)", () => {
      gsap.set(imageRef.current, {
        autoAlpha: 0,
        scale: 0.9,
        clearProps: "transform"
      });
    });
    mm.add("(max-width:767px)", () => {
      gsap.set(imageRef.current, {
        autoAlpha: 1,
        scale: 1,
        clearProps: "transform" 
      });
    });
    return () => mm.revert();
  }, []);

  useGSAP(() => {
    if (!imageRef.current) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width:768px)", () => {
      gsap.to(imageRef.current, {
        autoAlpha: isHover ? 1 : 0,
        scale: isHover ? 1 : 0.9,
        duration: 0.4,
        ease: "power2.out",
      });
    });
    return () => mm.revert();
  }, [isHover]);
  return (
    <div className="w-full h-fit ">
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative max-md:flex max-md:flex-col-reverse max-md:gap-2  "
      >
        {/* Text */}
        <div className="relative">
          <div
            className={`bg-accent w-full h-full absolute z-0 member-clip-path ${isHover ? "open" : ""}`}
          />

          <div className="md:px-3 md:py-1.5 flex flex-col max-md:gap-1 max-lg:gap-4 ">
            {/* role header */}
            <h4 className="display-base max-md:text-[12px] relative z-2 text-gray">
              {role}
            </h4>
            {/* Infos */}
            <div className="flex md:items-end     max-md:flex-col max-md:gap-1  relative z-2 justify-between pointer-events-none   ">
              <p className="body-xl-40 text-black flex-1 ">{name}</p>
              {/* Right side Skill&Define */}
              <div className="flex flex-2 max-lg:flex-col max-lg:gap-4    lg:items-end    h-full">
                <div className="flex flex-1  flex-col gap-2">
                <span className="display-s text-gray max-md:hidden">Skill</span>
                <p className="body-base text-black md:w-[364px] w-full">
                  {skill}
                </p>
              </div>
              <p className="body-s self-end flex-1  leading-none font-semibold  max-md:hidden">
                {define}
              </p>
              </div>
            </div>
          </div>

        </div>

        {/* Image */}
        <div
          ref={imageRef}
          className="
    aspect-square
    max-w-[400px]
    z-2

    relative
    left-auto
    bottom-auto
    translate-x-0

    /* Desktop */
    md:max-w-[304px]
    md:absolute
    md:bottom-0
    md:left-1/2
    md:-translate-x-1/2
  "
        >
          <img
            src={image}
            alt="member image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Divider */}
      <span className="inline-block w-full h-px bg-linegray mt-1.5 max-md:mt-8" />
    </div>
  );
};
