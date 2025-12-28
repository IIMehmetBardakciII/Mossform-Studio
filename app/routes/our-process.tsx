import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef, useState } from "react";
import PageTransition from "~/components/Animations/PageTransition";
import OurApproach from "~/components/OurProcessPage/OurApproach";
import Footer from "~/components/Utilities/Footer";
import Navbar from "~/components/Utilities/Navbar";
gsap.registerPlugin(ScrollTrigger, SplitText);
const steps = [
  {
    id: "01",
    header: "Discovery",
    description:
      "This is where every project begins. We listen closely, understand your needs, and explore the opportunities of the site. Through conversations, early sketches, and research, we form the foundation of the project’s direction.",
    img: "/images/our-process/discovery.webp",
  },
  {
    id: "02",
    header: "Concept Design",
    description:
      "We transform ideas into clear architectural concepts. Massing studies, material palettes, and spatial diagrams shape the early identity of the project. This phase defines how the project feels and functions.",
    img: "/images/our-process/concept-design.webp",
  },
  {
    id: "03",
    header: "Design Development",
    description:
      "The design becomes more refined and detailed. Structural logic, spatial flow, light behavior, and material applications are carefully shaped. Every decision strengthens the clarity and purpose of the project.",
    img: "/images/our-process/design-development.webp",
  },
  {
    id: "04",
    header: "Documentation",
    description:
      "We prepare all technical documentation required for construction. Detailed drawings, specifications, and schedules ensure the project can be built precisely and confidently.",
    img: "/images/our-process/documentation.webp",
  },
  {
    id: "05",
    header: "Construction Oversight",
    description:
      "We remain closely involved during construction to ensure the design is executed with precision. Collaboration with builders and craftsmen keeps the project aligned with the intended quality.",
    img: "/images/our-process/construction-oversight.webp",
  },
  {
    id: "06",
    header: "Completion & Refinement",
    description:
      "Once the space is complete, we fine-tune the light, textures, and atmosphere until everything feels calm, balanced, and deeply livable. This is where the home truly becomes yours.",
    img: "/images/our-process/completion-refinement.webp",
  },
];

type ProcessStepType = {
  step: {
    id: string;
    header: string;
    description: string;
    img: string;
  };
};
const ProcessStep = ({ step }: ProcessStepType) => {
  const stepRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
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
  });
  return (
    <div
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
          alt={step.img}
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

const OurProcessPage = () => {
  return (
      <section className="w-full relative h-full bg-white">
        <Navbar btnVariation="var4" variation="var3" />
        <div className="container relative mt-14 max-md:mt-10">
          <div className="md:absolute md:top-0 relative  w-fit z-50">
            <h1 className="display-xl text-black">Our Process</h1>
            <span className="text-gray body-base absolute -top-4 -right-10">
              (06)
            </span>
          </div>

          {/* Steps */}
          <div className="flex flex-col">
            {steps.map((step) => (
              <ProcessStep key={step.id} step={step} />
            ))}
          </div>
        </div>

        <OurApproach />

        <Footer />
      </section>
  );
};

export default OurProcessPage;
