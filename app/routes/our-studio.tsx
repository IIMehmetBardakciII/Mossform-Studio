import Hero from "~/components/OurStudioPage/Hero";
import Ideology from "~/components/OurStudioPage/Ideology";
import Team from "~/components/OurStudioPage/Team";
import Navbar from "~/components/Utilities/Navbar";

const OurStudioPage = () => {
  return (
    <div>
      <Navbar variation="var3" btnVariation="var4" />
      <div className="container">
        <Hero />
        <Ideology />
        <Team />
      </div>
    </div>
  );
};

export default OurStudioPage;
