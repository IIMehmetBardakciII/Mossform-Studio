import { Link } from "react-router";
import ImageAnimation from "../Animations/ImageAnimation";
import ScrollTextAnimation from "../Animations/ScrollTextAnimation";
import HoverTextAnimation from "../Animations/HoverTextAnimation";
import Button from "../Utilities/Button";

const works = [
  {
    projectName: "Sagaponack Box",
    location: "USA",
    date: "2024",
    img1: {
      desktop: "/images/projects/sagaponack-box/home.webp",
      mobile: "/images/projects/sagaponack-box/home-mobile.webp",
    },
    img2: {
      desktop: "/images/projects/sagaponack-box/bed.webp",
      mobile: "/images/projects/sagaponack-box/bed-mobile.webp",
    },
  },
  {
    projectName: "Courtyard House",
    location: "Portugal",
    date: "2023",
    img1: {
      desktop: "/images/projects/courtyard-house/home.webp",
      mobile: "/images/projects/courtyard-house/home-mobile.webp",
    },
    img2: {
      desktop: "/images/projects/courtyard-house/corridor.webp",
      // mobile:"/images/projects/sagaponack-box/bed-mobile.webp",
    },
  },
  {
    projectName: "Garden Pavilion",
    location: "Australia",
    date: "2020",
    img1: {
      desktop: "/images/projects/the-garden-pavilion/home.webp",
      mobile: "/images/projects/the-garden-pavilion/home-mobile.webp",
    },
    img2: {
      desktop: "/images/projects/the-garden-pavilion/lounge.webp",
      mobile: "/images/projects/the-garden-pavilion/lounge-mobile.webp",
    },
  },
];

const FeaturedWorks = () => {
  const buildSrcSet = (mobile?: string, desktop?: string) =>
    [mobile && `${mobile} 1344w`, desktop && `${desktop} 2688w`]
      .filter(Boolean)
      .join(", ");

  return (
    <section className="mt-gapSectionMobile md:mt-gapSectionDesktop container min-h-screen pb-[45px] max-md:pb-3">
      <div>
        <ScrollTextAnimation>
          <h2 className="display-xl text-black">
            Featured Works <span className="text-gray">(06)</span>
          </h2>
        </ScrollTextAnimation>
      </div>

      {/* Project Section */}
      <div className="flex flex-col md:gap-gapSectionMobile gap-14">
        {works.map((work, index) => (
          <div
            key={index}
            className={`flex gap-5 mt-[53px] max-md:mt-10 max-md:flex-col-reverse ${(index%2!==0)?"flex-row-reverse":""}`}
          >
            {/* Left Container */}
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex  flex-col gap-2">
                {/* Image */}
                <div className="md:aspect-734/528 max-h-[528px] aspect-272/270">
                  <ImageAnimation>
                    <img
                      loading="lazy"
                      src={work.img1.desktop}
                      alt="sagaponack home"
                      className="w-full h-full object-cover"
                      srcSet={buildSrcSet(work.img1.mobile, work.img1.desktop)}
                      sizes="(max-width: 768px) 672px, 1344px"
                    />
                  </ImageAnimation>
                </div>
                {/* Info&Links */}
                <div className="flex flex-wrap w-full justify-between max-md:gap-2 small-link text-black">
                  <span className="order-1">{work.projectName}</span>
                  <span className="text-gray order-2 max-md:order-3">
                    ({work.location})
                  </span>
                  <span className="text-gray order-3 max-md:order-4">
                    ({work.date})
                  </span>
                  <Link
                    className=" order-4 max-md:order-2 flex gap-1.5 items-center textBigContainer group"
                    to={"#"}
                  >
                    <span>
                      <HoverTextAnimation text="View The Project" />
                    </span>{" "}
                    <img
                      loading="lazy"
                      src="/icons/arrowRight.svg"
                      alt="arrow"
                      className="w-2.5 group-hover:scale-75 transition-transform duration-600  cubic-bezier(0.25, 1, 0.5, 1)"
                    />
                  </Link>
                </div>
              </div>
              {/* Should be rendered for last one CTA button */}
              {works.length - 1 === index && (
                <div className="max-md:flex max-md:justify-center mt-8">
                  <Button
                    hasCircle={false}
                    text="View All Works"
                    variant="var1"
                  />
                </div>
              )}
            </div>
            {/* Right Container */}
            <div className="flex flex-1 md:aspect-734/675 aspect-272/293 max-h-[675px]">
              <ImageAnimation>
                <img
                  loading="lazy"
                  src={work.img2.desktop}
                  srcSet={buildSrcSet(work.img2.mobile, work.img2.desktop)}
                  sizes="(max-width: 768px) 672px, 1344px"
                  alt="bed"
                  className="w-full h-full object-cover"
                />
              </ImageAnimation>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWorks;
