import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

type ProcessStepType = {
  step: {
    id: string;
    header: string;
    description: string;
    img: string;
  };
};
const  ProcessStep = ({ step }: ProcessStepType) => {
  const stepRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        // Image Animate
        imageRef.current,
        { scale: 1.5, filter: "blur(16px)" },
        {
          scale: 1,
          filter: "blur(0px)",
          scrollTrigger: {
            trigger: stepRef.current,
            scrub: true,
            end: "bottom bottom",
            invalidateOnRefresh: true,
          },
        }
      );
      const mm = gsap.matchMedia();
      mm.add(
        {
          isMobile: "(max-width:767px)",
          isDesktop: "(min-width:768px)",
        },
        (context) => {
          const { isDesktop } = context.conditions!;
          const isLast = step.id === "06";
          // Make resposnive
          if (!isLast) {
            gsap.to(textRef.current, {
              autoAlpha: 0,
              y: "-20%",
              scrollTrigger: {
                trigger: stepRef.current,
                scrub: true,
                start: isDesktop ? "60% top" : "30% top",
                end: isDesktop ? "+=30%" : "+=10%",
              },
            });
          }

          // CARD PIN
          ScrollTrigger.create({
            trigger: stepRef.current,
            start: "top top",
            end: isDesktop ? "+=100%" : "+=50%",
            pin: !isLast,
            pinSpacing: isLast,
          });
        }
      );
      return () => mm.revert();
    },
    { scope: stepRef }
  );
  return (
    <article
      ref={stepRef}
      className="flex max-md:flex-col-reverse max-md:mt-6  md:h-dvh h-full items-center  "
    >
      {/* Left Text */}
      <div
        ref={textRef}
        className="md:flex-1 h-full w-full  flex flex-col justify-center md:gap-6 gap-4 "
      >
        <div className="flex flex-col gap-2">
          <span className="text-gray body-base">({step.id})</span>
          <h2 className="display-l text-black">{step.header}</h2>
        </div>
        <p className="body-s text-black max-w-[555px]">{step.description}</p>
      </div>
      {/* Right Image Side */}
      <div className="md:flex-1 w-full h-full md:aspect-734/665 max-md:max-h-[300px]  overflow-hidden aspect-272/160 ">
        <img
          ref={imageRef}
          src={step.img}
          alt={`${step.header} phase of Mossform Architecture Studio process`}
          className="w-full h-full object-cover "
        />
      </div>
    </article>
  );
};

export default ProcessStep;
