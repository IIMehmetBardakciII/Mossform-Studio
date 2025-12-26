import ImageAnimation from "../Animations/ImageAnimation";
import ScrollTextAnimation from "../Animations/ScrollTextAnimation";

const awards = [
  {
    year: "2023",
    project: "The Garden Pavilion",
    award: "Zelna Space Excellence Award",
    info: "Recognizing architectural studios that seamlessly integrate natural elements into modern residential design.Awarded for Mossform's ability to create calm, restorative spaces that feel deeply connected to their environment.",
  },
  {
    year: "2021",
    project: "Lucid Origin",
    award: "IncLore Craft Design Honor",
    info: "Celebrating projects that masterfully balance natural light, material warmth, and spatial harmony. Granted for Mossform's innovative approach to blending minimalism with organic textures.",
  },
];
const Award = () => {
  return (
    <section className="min-h-dvh w-full md:mt-gapSectionDesktop mt-gapSectionMobile">
      <h2 className="text-[40px] text-black font-semibold leading-none font-display">
        Awards
      </h2>
      {/* Header */}
      <div className="grid grid-cols-4 max-sm:grid-cols-3  sm:gap-8 gap-4 pb-4 border-b display-s text-black mt-4">
        <span>Year</span>
        <span>Project</span>
        <span>Award</span>
        <span className="max-sm:hidden">Info</span>
      </div>

      {/* Rows */}
      <div className="divide-y">
        {awards.map((award, index) => (
          <div
            key={index}
            className="grid grid-cols-4 max-sm:grid-cols-3 sm:gap-8 gap-4 py-6 body-base text-black"
          >
            <div>{award.year}</div>
            <div>{award.project}</div>
            <div>{award.award}</div>
            <div className="body-s max-sm:hidden">{award.info}</div>
          </div>
        ))}
      </div>

      {/* Quote & Image */}
      <div className="flex max-md:flex-col mt-14 gap-5">
        {/* Quote */}
        <div className="flex-1 body-l text-black">
          <ScrollTextAnimation>
            Our greatest reward is creating spaces where people can finally
            breathe again where nature feels close, real, and alive.
          </ScrollTextAnimation>
        </div>

        {/* Image */}
        <div className="flex-1 lg:min-h-[646px] md:mt-[100px]">
          <ImageAnimation>
            <img
              src="/images/our-studio/meeting-room.webp"
              alt="meeting room"
              className="w-full h-full object-cover"
            />
          </ImageAnimation>
        </div>
      </div>
    </section>
  );
};

export default Award;
