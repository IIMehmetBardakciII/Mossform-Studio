import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {SplitText } from "gsap/all";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useRef } from "react";
if (typeof window !== "undefined") {
  gsap.registerPlugin(MotionPathPlugin, SplitText);
}

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const stoneRef = useRef<HTMLImageElement | null>(null);
  const leafRef = useRef<HTMLImageElement | null>(null);
  const stoneandleafWrapper = useRef<HTMLDivElement | null>(null);
  const preloaderContainer = useRef<HTMLDivElement | null>(null);
  const elementWrapper = useRef<HTMLDivElement | null>(null);

  const animateStone = (tl: gsap.core.Timeline) => {
    tl.from(stoneRef.current, {
      opacity: 0,
      duration: 1.0,
      ease: "power2.inOut",
    });
  };
  const animateLeaf = (tl: gsap.core.Timeline) => {
    tl.to(
      leafRef.current,
      {
        motionPath: {
          path: "#pathForLeaf",
          align: "#pathForLeaf",
          alignOrigin: [0.5, 0.5],
          //   autoRotate: false,
        },
        duration: 3,
        ease: "sine.inOut",
      },
      "-=1"
    );
    tl.to(
      leafRef.current,
      {
        opacity: 1,
        duration: 1.2,
      },
      "<"
    );
  };
  const splitInstances: SplitText[] = [];

  const animateText = (tl: gsap.core.Timeline) => {
    //*   Text Animation Begin

    gsap.utils.toArray<HTMLElement>("[data-split='chars']").forEach((el) => {
      const split = SplitText.create(el, {
        type: "chars",
        mask: "chars",
      });

      splitInstances.push(split);

      tl.from(
        split.chars,
        {
          yPercent: 120,
          duration: 1.0,
          ease: "power3.out",
          stagger: {
            each: 0.03,
            from: "center",
          },
        },
        "<"
      );
    });

    tl.to(".text-clip-path", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1.5,
      ease: "sine.inOut",
    });
    //*   Text Animation End
  };

  const animateExit = (tl: gsap.core.Timeline) => {
    //   Open scrollbar when opacity down to 0
    tl.add(() => {
      document.body.style.overflow = "auto";
    }, "<");

    tl.set(preloaderContainer.current, {
      pointerEvents: "none",
      display: "none",
    });

    tl.call(() => {
      onComplete();
    });
  };

  useGSAP(
    () => {
      if (
        !stoneRef.current ||
        !leafRef.current ||
        !stoneandleafWrapper.current ||
        !preloaderContainer.current ||
        !elementWrapper.current
      )
        return;
      gsap.set(elementWrapper.current, {
        autoAlpha: 0,
      });
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline();
      tl.to(elementWrapper.current, {
        autoAlpha: 1,
        duration: 0.01,
      });

      //   Stone animation reveal
      animateStone(tl);
      //   Leaf animation reveal

      animateLeaf(tl);

      //   Stone & Leaf scale animaiton
      tl.to(stoneandleafWrapper.current, {
        scale: 0.5,
        duration: 0.7,
        ease: "power2.inOut",
      });

      //   Texts animation

      animateText(tl);

      tl.to(preloaderContainer.current, {
        opacity: 0,
        duration: 0.6,
        ease: "sine.inOut",
      });

      animateExit(tl);
      return () => {
        splitInstances.forEach((s) => s.revert());
      };
    },
    { scope: preloaderContainer }
  );

  return (
    <div
      ref={preloaderContainer}
      className="fixed w-full h-dvh bg-black text-white top-0 z-100"
    >
      <div
        ref={elementWrapper}
        className=" flex relative  flex-col gap-8 items-center justify-center h-full w-full invisible"
      >
        {/* Stone & Leaf */}
        <div ref={stoneandleafWrapper} className="relative">
          <img
            ref={stoneRef}
            src="/images/preloader/stone.svg"
            alt="stone"
            className="w-fit h-fit scale-200 "
          />
          <div className="absolute -top-100 -translate-x-1/2 w-[300px] h-[300px]">
            <img
              ref={leafRef}
              src="/images/preloader/leaf.svg"
              alt="stone"
              className="opacity-0"
            />
            {/* Path for leaf */}
            <svg
              width="207"
              height="221"
              viewBox="0 0 207 221"
              fill="none"
              className="absolute top-0 left-0 w-full h-full  pointer-events-none opacity-0"
            >
              <path
                id="pathForLeaf"
                d="M35.1393 0.30798C3.47259 40.808 -35.0607 120.108 64.1393 113.308C163.339 106.508 200.139 182.141 206.139 220.808"
                stroke="white"
              />
            </svg>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center flex-col gap-1  pointer-events-none ">
          <div className="relative inline-block">
            <h3 data-split="chars" className="display-xl text-gray ">
              Mossform
            </h3>
            <h3
              aria-hidden="true"
              className="display-xl text-clip-path bg-white bg-clip-text absolute inset-0"
            >
              Mossform
            </h3>
          </div>
          <div className="relative inline-block">
            <span
              data-split="chars"
              className="display-s text-gray block leading-none"
            >
              Architecture
            </span>
            <span
              aria-hidden="true"
              className="display-s text-clip-path bg-white bg-clip-text absolute inset-0 block leading-none"
            >
              Architecture
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
