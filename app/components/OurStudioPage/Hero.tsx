const Hero = () => {
  return (
    <div className="w-full  md:mt-14 mt-[60px] h-dvh">
      {/* Hero Image */}
      <img
        src="/images/our-studio/studio.webp"
        alt="studio image"
        srcSet="/images/our-studio/studio-mobile.webp 1344w, /images/our-studio/studio.webp 2688w"
        sizes="(max-width: 768px) 672px, 1344px"
        className="w-full h-[350px] object-cover"
      />

      {/* Header */}
      <div className="flex justify-between max-md:flex-col max-md:gap-4">
        <h1 className="text-black display-xl mt-4 max-md:mt-6">Our Studio</h1>
        <p className="body-base text-black max-w-[735px] md:mt-[50px] ">
          Mossform is an architectural studio focused on creating calm,
          nature-connected spaces. We combine minimal forms, natural materials,
          and thoughtful detailing to craft environments that feel grounded,
          intentional, and deeply personal. Every project grows from close
          collaboration, respect for the site, and a belief that architecture
          should enrich daily life with clarity and quiet beauty.
        </p>
      </div>
    </div>
  );
};

export default Hero;
