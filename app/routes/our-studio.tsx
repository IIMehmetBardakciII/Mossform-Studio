import Award from "~/components/OurStudioPage/Award";
import Hero from "~/components/OurStudioPage/Hero";
import Ideology from "~/components/OurStudioPage/Ideology";
import Team from "~/components/OurStudioPage/Team";
import Footer from "~/components/Utilities/Footer";
import Navbar from "~/components/Utilities/Navbar";

const OurStudioPage = () => {
  return (
    <>
      <title>Mossform Architecture | Our Studio</title>

      <meta
        name="description"
        content="Discover Mossform Architecture Studio — a design practice guided by biophilic principles, sustainability, and a belief in calm, nature-driven living through thoughtful architecture."
      />

      <meta
        property="og:title"
        content="Mossform Architecture | Our Studio"
      />
      <meta
        property="og:description"
        content="A biophilic architecture studio focused on sustainability, calm spaces, and intentional living inspired by nature."
      />

      {/* Content */}
      <div>
        <Navbar variation="var3" btnVariation="var4" />
        <div className="container">
          <Hero />
          <Ideology />
          <Team />
          <Award />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default OurStudioPage;
