import FeaturedWorks from "~/components/HomeSections/FeaturedWorks"
import Hero from "~/components/HomeSections/Hero"
import Intro from "~/components/HomeSections/Intro"
import OurProcess from "~/components/HomeSections/OurProcess"
import Testimonials from "~/components/HomeSections/Testimonials"
import Footer from "~/components/Utilities/Footer"

const HomePage = () => {
  return (
    <div className="relative w-full h-full">
      <Hero/>
      <Intro />
      <FeaturedWorks />
      <OurProcess />
      <Testimonials />
      <Footer/>
    </div>
  )
}

export default HomePage