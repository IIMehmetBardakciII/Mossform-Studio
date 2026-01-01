import Award from "~/components/OurStudioPage/Award";
import Hero from "~/components/OurStudioPage/Hero";
import Ideology from "~/components/OurStudioPage/Ideology";
import Team from "~/components/OurStudioPage/Team";
import Footer from "~/components/Utilities/Footer";
import Navbar from "~/components/Utilities/Navbar";
import type { Route } from "../+types/root";

export const meta: Route.MetaFunction = () => [
  {
    title: "Mossform Architecture | Our Studio",
  },
  {
    name: "description",
    content:
      "Discover Mossform Architecture Studio — a design practice guided by biophilic principles, sustainability, and a belief in calm, nature-driven living through thoughtful architecture.",
  },
  {
    property: "og:title",
    content: "Mossform Architecture | Our Studio",
  },
  {
    property: "og:description",
    content:
      "A biophilic architecture studio focused on sustainability, calm spaces, and intentional living inspired by nature.",
  },
];
const OurStudioPage = () => {
  return (
      <div>
        <Navbar variation="var3" btnVariation="var4" />
        <main className="container">
          <Hero />
          <Ideology />
          <Team />
          <Award />
        </main>
        <Footer />
      </div>
  );
};

export default OurStudioPage;
