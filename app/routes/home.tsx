import FeaturedWorks from "~/components/HomeSections/FeaturedWorks"
import Hero from "~/components/HomeSections/Hero"
import Intro from "~/components/HomeSections/Intro"
import OurProcess from "~/components/HomeSections/OurProcess"

const HomePage = () => {
  return (
    <div className="relative w-full h-full">
      <Hero/>
      <Intro />
      <FeaturedWorks />
      <OurProcess />
    </div>
  )
}

export default HomePage