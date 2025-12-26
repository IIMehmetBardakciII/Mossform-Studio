import ImageAnimation from "../Animations/ImageAnimation";

const Ideology = () => {
  return (
    <section className="w-full flex max-md:flex-col-reverse max-md:gap-6 mt-gapSectionDesktop max-md:mt-10 md:pb-[114px] ">
      {/* Left Text */}
      <div className="flex-1 flex flex-col gap-6 max-md:gap-4">
        <h2 className="text-black font-display text-[40px] font-semibold leading-none">Our Design Ideology</h2>
        <p className="body-base text-black">
          At Mossform, design is a balance of restraint and warmth. We start
          with simple, honest forms and build harmony through natural light,
          sustainable materials, and biophilic principles. Our goal is to create
          spaces that feel alive — places that breathe, soften the pace of life,
          and reconnect people with the natural world.
        </p>
      </div>
      {/* Right Image */}
      <div className="flex-1 max-h-[404px]">
        <ImageAnimation>
          <img
            src="/images/our-studio/ideology.webp"
            alt="studio image"
            srcSet="/images/our-studio/ideology-mobile.webp 1344w, /images/our-studio/ideology.webp 2688w"
            sizes="(max-width: 768px) 672px, 1344px"
            className="w-full object-cover"
          />
        </ImageAnimation>
      </div>
    </section>
  );
};

export default Ideology;
