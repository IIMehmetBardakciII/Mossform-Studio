import FeaturedWorks from "~/components/HomeSections/FeaturedWorks"
import Hero from "~/components/HomeSections/Hero"
import Intro from "~/components/HomeSections/Intro"

const HomePage = () => {
  return (
    <div className="relative w-full h-full">
      <Hero/>
      <Intro />
      <FeaturedWorks />
    </div>
  )
}

export default HomePage