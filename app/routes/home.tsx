import { useEffect, useState } from "react";
import { useLocation, useNavigationType } from "react-router";
import Preloader from "~/components/Animations/PreloaderAnimation";
import FeaturedWorks from "~/components/HomeSections/FeaturedWorks";
import Hero from "~/components/HomeSections/Hero";
import Intro from "~/components/HomeSections/Intro";
import OurProcess from "~/components/HomeSections/OurProcess";
import Testimonials from "~/components/HomeSections/Testimonials";
import FixedNav from "~/components/Utilities/FixedNav";
import Footer from "~/components/Utilities/Footer";

const HomePage = () => {
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasSeenHomePreload = sessionStorage.getItem("home-preload-seen");

    const internalHomeClick = location.state?.internalHomeClick === true;


    //  Allow preload only for first entry OR intentional home click
    if (internalHomeClick || !hasSeenHomePreload) {
      setIsLoading(true);
    }
  }, [location.key]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* SEO* Start */}
      <title>
        Mossform Architecture | Contemporary & Nature-Driven Architecture
      </title>

      <meta
        name="description"
        content="Mossform Architecture Studio brings people closer to nature through sustainable, biophilic architecture, creating calm and modern spaces for intentional living."
      />

      <meta
        property="og:title"
        content="Mossform Architecture | Contemporary & Nature-Driven Architecture"
      />
      <meta
        property="og:description"
        content="Bringing people closer to nature through sustainable, biophilic architecture and calm, modern spaces."
      />
      {/* SEO END! */}

      {/* PAGE CONTENT (always mounted) */}

      <div className="relative w-full h-full">
        <Hero />
        <Intro />
        <FeaturedWorks />
        <OurProcess />
        <Testimonials />
        <Footer />
        <FixedNav />

        {/* PRELOADER ON TOP */}
        {isLoading && (
          <Preloader
            onComplete={() => {
              sessionStorage.setItem("home-preload-seen", "true");
              setIsLoading(false);
              window.history.replaceState({}, "");
            }}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
