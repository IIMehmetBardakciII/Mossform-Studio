import Award from "~/components/OurStudioPage/Award";
import Hero from "~/components/OurStudioPage/Hero";
import Ideology from "~/components/OurStudioPage/Ideology";
import Team from "~/components/OurStudioPage/Team";
import Footer from "~/components/Utilities/Footer";
import Navbar from "~/components/Utilities/Navbar";

const OurStudioPage = () => {
  return (
    <div>
      <Navbar variation="var3" btnVariation="var4" />
      <div className="container">
        <Hero />
        <Ideology />
        <Team />
        <Award/>
      </div>
      <Footer/>
    </div>
  );
};

export default OurStudioPage;
