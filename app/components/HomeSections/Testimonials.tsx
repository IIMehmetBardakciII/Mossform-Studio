import { Link } from "react-router";
import ScrollTextAnimation from "../Animations/ScrollTextAnimation";
import HoverTextAnimation from "../Animations/HoverTextAnimation";
import SmallLink from "../Utilities/SmallLink";
import ImageAnimation from "../Animations/ImageAnimation";
const testimonials = [
  {
    name: "Chango",
    text: "From the very first conversation, the team understood what this space needed to feel like. It wasn’t just about adding a room — it was about creating a place where our everyday life could slow down and feel more connected",
  },
  {
    name: "Karen",
    text: "This space has changed the way I start and end my day. It feels calm, grounded, and completely mine — a place where I can breathe, reflect, and return to myself.",
  },
];
const Testimonials = () => {
  return (
    <section className="mt-gapSectionMobile md:mt-gapSectionDesktop container min-h-screen pb-[45px] max-md:pb-3">
      <div>
        <ScrollTextAnimation>
          <h2 className="display-xl text-black">What Our Clients Say</h2>
        </ScrollTextAnimation>
      </div>
      <div className="flex flex-col gap-[116px] max-md:gap-10 md:mt-15.5 mt-10">
        {/* Top testimonial */}
        <div className="flex gap-gapSectionMobile max-md:flex-col max-md:gap-6">
          {/* Left Image&Info */}
          <div className="flex flex-col gap-2">
            {/* Image */}
            <div className="md:aspect-485/376 aspect-272/188 min-w-[272px] max-h-[376px]">
              <ImageAnimation>
                <img
                  src="/images/home/testimonial-image1.webp"
                  alt="Chango enjoying the Garden Pavilion"
                  className="w-full h-full object-cover"
                />
              </ImageAnimation>
            </div>
            {/* Info */}
            <div className="flex flex-wrap w-full justify-between max-md:gap-2 small-link text-black">
              <span className="order-1">Garden Pavilion</span>
              <span className="text-gray order-2 max-md:order-3">
                (Australia)
              </span>
              <span className="text-gray order-3 max-md:order-4">(2020)</span>
              <Link
                className=" order-4 max-md:order-2 flex gap-1.5 items-center textBigContainer group"
                to={`works/garden-pavilion`}
              >
                <span>
                  <HoverTextAnimation text="View The Project" />
                </span>
                <img
                  loading="lazy"
                  src="/icons/arrowRight.svg"
                  alt="arrow"
                  className="w-2.5 group-hover:scale-75 transition-transform duration-600  cubic-bezier(0.25, 1, 0.5, 1)"
                />
              </Link>
            </div>
          </div>
          {/* Testimonial */}
          <div className="  flex flex-col gap-3 max-md:gap-2">
            <span className="text-gray body-s">{testimonials[0].name}</span>
            <ScrollTextAnimation>
              <p className="text-black max-w-[870px] body-l">
                {testimonials[0].text}
              </p>
            </ScrollTextAnimation>
            <div className="flex justify-end">
              <SmallLink text="Read More" to="#" />
            </div>
          </div>
        </div>
        {/* Top  */}

        {/* Bottom testimonial */}
        <div className="flex md:flex-row-reverse gap-6 max-md:flex-col ">
          {/* Right Image&Info */}
          <div className="flex flex-1 flex-col gap-2">
            {/* Image */}
            <div className="md:aspect-594/545 aspect-272/188 min-w-[272px] max-h-[545px]">
              <ImageAnimation>
                <img
                  src="/images/home/testimonial-image2.webp"
                  alt="Karen in the Zenith Pavilion"
                  className="w-full h-full object-cover"
                />
              </ImageAnimation>
            </div>
            {/* Info */}
            <div className="flex flex-wrap w-full justify-between max-md:gap-2 small-link text-black">
              <span className="order-1">Zenith Pavilion</span>
              <span className="text-gray order-2 max-md:order-3">(USA)</span>
              <span className="text-gray order-3 max-md:order-4">(2024)</span>
              <Link
                className=" order-4 max-md:order-2 flex gap-1.5 items-center textBigContainer group"
                to={`works/zenith-pavilion`}
              >
                <span>
                  <HoverTextAnimation text="View The Project" />
                </span>
                <img
                  loading="lazy"
                  src="/icons/arrowRight.svg"
                  alt="arrow"
                  className="w-2.5 group-hover:scale-75 transition-transform duration-600  cubic-bezier(0.25, 1, 0.5, 1)"
                />
              </Link>
            </div>
          </div>
          {/* Testimonial */}
          <div className="flex-1  flex flex-col gap-3 max-md:gap-2">
            <span className="text-gray body-s">{testimonials[1].name}</span>
            <ScrollTextAnimation>
              <p className="text-black body-l  max-w-[753px]">
                {testimonials[1].text}
              </p>
            </ScrollTextAnimation>
            <div className="flex max-md:justify-end">
              <SmallLink text="Read More" to="#" />
            </div>
          </div>
        </div>
        {/* Bottom */}
      </div>
    </section>
  );
};

export default Testimonials;
