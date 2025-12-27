import { useEffect, useState } from "react";
import Preloader from "~/components/Animations/PreloaderAnimation";
import FeaturedWorks from "~/components/HomeSections/FeaturedWorks";
import Hero from "~/components/HomeSections/Hero";
import Intro from "~/components/HomeSections/Intro";
import OurProcess from "~/components/HomeSections/OurProcess";
import Testimonials from "~/components/HomeSections/Testimonials";
import FixedNav from "~/components/Utilities/FixedNav";
import Footer from "~/components/Utilities/Footer";

const HomePage = () => {
  const [isloading, setIsLoading] = useState(true);

  useEffect(()=>window.scrollTo(0,0),[])

  return (
    <div className="relative w-full h-full">
      {/* PAGE CONTENT (always mounted) */}

      <Hero />
      <Intro />
      <FeaturedWorks />
      <OurProcess />
      <Testimonials />
      <Footer />
      <FixedNav />

      {/* PRELOADER ON TOP */}
      {isloading && <Preloader onComplete={() => setIsLoading(false)} />}
    </div>
  );
};

export default HomePage;
