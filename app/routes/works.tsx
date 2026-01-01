import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable, ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import { Link } from "react-router";
import Navbar from "~/components/Utilities/Navbar";
import { projects } from "~/constant";
gsap.registerPlugin(ScrollTrigger, Draggable);
const ImageContainer = ({ src,alt }: { src: string; alt:string; }) => {
  return <img src={src} alt={alt} className="w-full object-cover h-full" />;
};
const WorksPage = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);
  const scrollControll = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
    if (!titleRef.current) return;
    gsap.fromTo(
      titleRef.current,
      {
        y: 10,
        opacity: 0,
      },
      { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
    );
  }, [currentProject]);

  useGSAP(
    () => {
      if (!scrollControll.current || !containerRef.current) return;

      const totalItems = scrollControll.current.children.length; //13

      const getMaxTranslateX = (): number => {
        const totalContentWidth = scrollControll.current!.scrollWidth;
        const viewportWidth =
          scrollControll.current!.parentElement!.clientWidth;
        const endPadding = 24;

        return totalContentWidth - viewportWidth + endPadding;
      };

      const mm = gsap.matchMedia();
      //* Horizontal scroll animation >=768px
      const scrollSpeed = 1.8;
      mm.add("(min-width:768px)", () => {
        gsap.to(scrollControll.current, {
          x: () => -getMaxTranslateX(),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${getMaxTranslateX() * scrollSpeed}`,
            scrub: true,
            pin: true,
            snap: {
              snapTo: 1 / (totalItems - 1),
              duration: 0.3,
              ease: "power2.out",
            },
            onUpdate: (self) => {
              const index = Math.round(self.progress * (totalItems - 1));
              setCurrentProject(index);
            },
            invalidateOnRefresh: true,
          },
        });
      });
      //* Drag animation <768px
      let draggable: Draggable | null = null;
      ScrollTrigger.addEventListener("refreshInit", () => {
        if (!draggable) return;
        const newMaxX = getMaxTranslateX();
        draggable.applyBounds({
          minX: -newMaxX,
          maxX: 0,
        });
      });
      mm.add("(max-width:767px)", () => {
        const maxX = getMaxTranslateX();

        draggable = Draggable.create(scrollControll.current, {
          type: "x",
          bounds: {
            minX: -maxX,
            maxX: 0,
          },
          inertia: true,

          onDragEnd: function (this: Draggable) {
            // this return draggable instance include specs as like (this.x current x positin)
            const currentMaxX = getMaxTranslateX();
            const progress = Math.abs(this.x) / currentMaxX; // this.x maybe will be negative(left scroll) = f.e.: -600-> 600/maxX(1200) = 0.5 half way
            const index = Math.round(progress * (totalItems - 1)); // This convert to progress 0-1  range to 0-12 index number f.e: 0.5*12=6 and currentProject will be 6
            setCurrentProject(index);
          },
        })[0];

        return () => {
          draggable?.kill();
          draggable = null;
        };
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <>
      {/* Seo */}
      <title>Mossform Architecture | Our Works</title>
      <meta
        name="description"
        content="Explore selected architectural works by Mossform Architecture, featuring calm, modern, and nature-driven projects shaped by biophilic and sustainable design principles."
      />
      <meta
        property="og:title"
        content="Mossform Architecture | Our Works"
      />

      <meta
        property="og:description"
        content="A curated portfolio of calm, modern, and nature-driven architectural projects by Mossform Architecture."
      />

      {/* Content */}
      <main ref={containerRef} className="w-full h-dvh relative  bg-black ">
        <Navbar btnVariation="var2" variation="var2" />
        {/* Projects */}
        <div className=" mt-5 max-md:mt-[105px] flex overflow-x-clip w-full md:h-[400px] h-[300px] ">
          <div
            ref={scrollControll}
            className="w-full h-full flex gap-4 max-md:gap-1  "
          >
            {projects.map((project, index) => (
              <Link
                to={`/works/${project.slug}`}
                key={index}
                className={`
         aspect-300/300 transition-all ease-in duration-150 max-w-[300px]
        ${currentProject === index ? "md:aspect-300/400 md:max-h-[400px]   opacity-100 hover:opacity-80  hover:border hover:border-white" : "md:aspect-300/360 md:max-h-[360px]  opacity-50"}
        `}
              >
                <ImageContainer src={project.home} alt={`${project.name} architectural project by Mossform Architecture`} />
              </Link>
            ))}
          </div>
        </div>
        {/* Divider */}
        <span className="block container w-full h-px max-md:hidden bg-[#595959] my-10" />
        {/* Info */}
        <div className="container max-md:mt-8">
          <h1 className="display-m text-gray">Works</h1>
          <div className="text-white flex w-full justify-between items-end">
            <span className=" capitalize text-[80px] font-medium font-body leading-none">
              {String(currentProject + 1).padStart(2, "0")}
            </span>
            <span ref={titleRef} className="body-xl capitalize md:ml-5">
              {projects[currentProject].name}
            </span>
            <div className="flex items-center justify-center gap-2 max-md:hidden leading-none">
              <span>Scroll to explore</span>
              <img
                src="/icons/arrowRight-white.svg"
                alt="arrowRight"
                className="animate-pulse"
              />
            </div>
          </div>
          <div className="w-full  flex justify-center mt-6">
            <div className="w-[500px] h-px bg-[#595959] relative">
              <span
                style={{
                  width: `${((currentProject + 1) / projects.length) * 100}%`,
                }}
                className="h-px transition-all ease-in duration-150 bg-gray absolute left-0"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default WorksPage;
