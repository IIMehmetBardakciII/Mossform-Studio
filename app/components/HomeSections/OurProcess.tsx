import { Link } from "react-router";
import ImageAnimation from "../Animations/ImageAnimation";
import ScrollTextAnimation from "../Animations/ScrollTextAnimation";
import Button from "../Utilities/Button";

const OurProcessSteps = [
  "Discovery",
  "Concept Design",
  "Design Development",
  "Documentation",
  "Construction Oversight",
  "Completion & Refinement",
];
const OurProcess = () => {
  return (
    <section aria-labelledby="our-process" className="mt-gapSectionMobile md:mt-gapSectionDesktop container min-h-screen md:pb-[117px]   ">
      {/* Screen Reader Header */}
      <h2 className="sr-only" id="our-process">Our Process</h2>

      <div>
        <ScrollTextAnimation ariaHidden>
          <h2 className="display-xl text-black">Our Process</h2>
        </ScrollTextAnimation>
      </div>

      <div className="flex md:mt-[42px] max-md:flex-col max-md:gap-8   relative pb-20  mt-8 gap-[120px]">
        {/* Left */}
        <div className="flex flex-col  justify-between  ">
          <div className="flex flex-col gap-2">
            {/* Image */}
            <div className="md:aspect-484/392 max-h-[392px] aspect-272/334 ">
              <ImageAnimation>
                <img
                  src="/images/our-process/concept-design.webp"
                  alt="Concept Design step in Mossform architecture process"
                  className="w-full h-full object-cover"
                />
              </ImageAnimation>
            </div>
            {/* Info */}
            {/* Steps */}
            <div className="flex flex-col gap-2">
              {OurProcessSteps.map((step, index) => (
                <span key={index} className="body-s text-black">
                  <span className="text-gray tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>{" "}
                  — {step}
                </span>
              ))}
            </div>
          </div>
          {/* Cta */}
          <Link
            to={"/ourprocess"}
            className="max-md:absolute max-md:bottom-0 max-md:left-1/2 max-md:-translate-x-1/2 "
          >
            <Button hasCircle={false} text="More Details" variant="var1" />
          </Link>
        </div>
        {/* Right */}
        <div className="max-w-[870px] h-full flex flex-col gap-[82px] max-md:gap-6">
          <ScrollTextAnimation>
            <p className="text-black body-l">
              Our process is built on clarity, collaboration, and thoughtful
              design. From first conversation to final detail, we guide each
              project with intention, balancing creativity, function, and a deep
              respect for place.
            </p>
          </ScrollTextAnimation>
          <ScrollTextAnimation>
            <p className="text-black body-l">
              A calm, structured journey that turns ideas into spaces with
              purpose, precision, and lasting value.
            </p>
          </ScrollTextAnimation>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
