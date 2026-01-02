import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import gsap from "~/utility/gsapClient";

const OurApproach = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !imageWrapRef.current || !textRef.current)
        return;

      const mm = gsap.matchMedia();
      mm.add("(min-width:768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: 1,
          },
        });
        tl.to(imageWrapRef.current, {
          width: "50%",
          duration: 1,
          ease: "power2.inOut",
        }).from(
          textRef.current,
          {
            opacity: 0,
            x: 50,
            duration: 0.8,
          },
          "<"
        );
      });
    return () => mm.revert();

    },
    { scope: sectionRef }
  );
  return (
    <section
      ref={sectionRef}
      className="container relative md:mt-[194px] mt-gapSectionMobile min-h-dvh w-full overflow-x-hidden"
    >
      <div className="h-dvh flex w-full items-center md:justify-between gap-6 max-md:gap-6 max-md:flex-col">
        {/* Image */}
        <div
          ref={imageWrapRef}
          className="w-full md:h-full h-80 shrink-0 overflow-hidden"
        >
          <img
            loading="lazy"
            src="/images/projects/zenith-pavilion/home.webp"
            alt="home"
            className="w-full h-full object-cover"
            srcSet="/images/projects/zenith-pavilion/home.webp 1344w, /images/projects/zenith-pavilion/home.webp 2688w"
            sizes="(max-width: 768px) 672px, 1344px"
          />
        </div>
        {/* Text */}
        <div
          ref={textRef}
          className="flex flex-col gap-6 max-md:gap-4 text-black  "
        >
          <h2 className="display-xl">Our Approach</h2>
          <p className="body-base max-w-[578px] ">
            We design refined, sustainable spaces shaped by biophilic principles
            and modern minimalism. By pairing natural materials with thoughtful,
            calming architecture, we create environments that feel intentional
            and deeply connected to nature.
            <br /><br /> Our purpose is simple: to craft healthier, more meaningful
            places that restore balance and elevate everyday living.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
