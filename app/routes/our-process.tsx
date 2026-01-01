import OurApproach from "~/components/OurProcessPage/OurApproach";
import Footer from "~/components/Utilities/Footer";
import Navbar from "~/components/Utilities/Navbar";
import type { Route } from "../+types/root";
import ProcessStep from "~/components/OurProcessPage/ProcessStep";
import { steps } from "~/constant";

export const meta: Route.MetaFunction = () => [
  {
    title: "Mossform Architecture | Our Process",
  },
  {
    name: "description",
    content:
      "Discover Mossform Architecture Studio’s design process, from discovery and concept development to construction oversight and refinement, shaping calm and nature-driven spaces.",
  },
  {
    property: "og:title",
    content: "Our Process | Mossform Architecture Studio",
  },
  {
    property: "og:description",
    content:
      "A clear and thoughtful architectural process focused on clarity, collaboration, and nature-driven design.",
  },
];


const OurProcessPage = () => {
  return (
    <main className="w-full relative h-full bg-white">
      <Navbar btnVariation="var4" variation="var3" />
      <section className="container relative mt-14 max-md:mt-10">
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
      </section>

      <OurApproach />

      <Footer />
    </main>
  );
};

export default OurProcessPage;
