import ImageAnimation from "../Animations/ImageAnimation";
import SmallLink from "../Utilities/SmallLink";

const Intro = () => {
  return (
    <section className="md:mt-gapSectionDesktop mt-gapSectionMobile container min-h-screen flex flex-col md:gap-[156px] gap-6">
      <div className="gap-first-pair">
        <div className="flex-2 md:aspect-482/368 aspect-272/208 max-w-[482px] ">
          <ImageAnimation>
            <img
              src="/images/home/introImage1.webp"
              alt="familyImage"
              className="flex-2 object-cover w-full h-full "
            />
          </ImageAnimation>
        </div>
        <div className="flex flex-col gap-8 max-md:gap-2 flex-3 ">
          <h2 className="display-xl text-black">Reconnect With Nature</h2>
          <p className="body-base text-black max-w-[674px]">
            At Mossform, we begin every project with a shared conversation —
            listening closely, shaping clarity, and building a direction that
            feels honest to both the client and the space itself. Our team works
            fluidly with builders and collaborators to ensure each step is
            calm,coordinated, and grounded in intention.
          </p>
        </div>
      </div>
      <div className="gap-second-pair mb-[114px]">
        <div className="flex flex-col md:gap-14 gap-2 flex-1">
          <p className="body-base text-black max-w-[674px]">
            Guided by modern simplicity and organic warmth, every design evolves
            into its own identity — shaped by the site’s natural rhythm, the
            aspirations of its owners, and the quiet craftsmanship that defines
            our studio.
          </p>
          <SmallLink to="#" text="Learn More About Us" />
        </div>
        <div className="flex-1 aspect-272/270 max-h-[362px] md:aspect-734/362">
          <ImageAnimation>
            <img
              src="/images/home/introImage2.webp"
              alt="handShakeImage"
              className="w-full h-full object-cover"
              //* If Image file size bigger than 100px && (desktop size / mobile size) ratio 40%-50% use it srcset otherwise unnecessary.
              // srcSet="/images/home/introImage2/desktop.webp 734w, /images/home/introImage2/mobile.webp 544w"
              // sizes="
              //   (max-width: 768px) 272px,
              //   734px
              // "
            />
          </ImageAnimation>
        </div>
      </div>
    </section>
  );
};

export default Intro;
