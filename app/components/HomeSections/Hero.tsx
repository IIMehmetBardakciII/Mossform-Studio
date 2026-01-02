import Navbar from "../Utilities/Navbar";


const Hero = () => {

  return (
    <section className="bg-black flex flex-col  relative w-full  h-dvh ">
      <Navbar btnVariation="var1" variation="var1" />

      {/* Texts */}
      <header className="flex container  relative z-20 w-full    h-[calc(100vh-96px)] md:justify-between md:items-end max-md:justify-end max-md:gap-4 max-md:flex-col pb-6    ">
        <div className="relative w-fit h-fit">
          <h1 className="display-xl text-white ">
            Mossform <br />
            Architecture
          </h1>
          <span className="display-xl text-white absolute -top-10 right-3">
            ®
          </span>
        </div>
        <div className="flex flex-col gap-14">
          <p className="max-w-[426px] text-white body-base">
            Mossform designs unique living spaces that connect with nature by
            balancing minimal modernity with natural textures.
          </p>
          <span className="flex justify-end items-center  gap-2 body-s text-white max-md:hidden">
            Scroll to explore
            <img
              src="/icons/arrowDown.svg"
              alt="arrowDown"
              className="w-2.5 animate-bounce"
            />
          </span>
        </div>
      </header>

      {/* Background image */}
      <div className="absolute bgImage w-full h-full">
        <div className="w-full h-full bg-[#0B0B0B] opacity-20 absolute " />
        <img
        loading="eager"
        fetchPriority="high"
          src="images/projects/the-garden-pavilion/home.webp"
          alt="the-garden-pavilion"
          className="object-cover w-full h-full"
          srcSet="/images/projects/the-garden-pavilion/home-mobile.webp 1344w, /images/projects/the-garden-pavilion/home.webp 2688w"
                  sizes="(max-width: 768px) 672px, 1344px"
        />
      </div>
    </section>
  );
};

export default Hero;
