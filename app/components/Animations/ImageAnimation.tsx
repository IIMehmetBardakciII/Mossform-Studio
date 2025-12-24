import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const ImageAnimation = ({ children }: { children: React.ReactNode }) => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (!imageRef.current) return;

      // const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      // const yMove = isDesktop ? -20 : 0;
      let mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: "(min-width:768px)",
          mobile: "(max-width: 767px)",
        },
        (context) => {
          let { isDesktop } = context.conditions!;

          gsap
            .timeline({
              scrollTrigger: {
                trigger: imageRef.current,
                start: "top 80%",
                end: "bottom 40%",
                scrub: 1.5,
                invalidateOnRefresh: true,
              },
            })
            .fromTo(
              imageRef.current,
              {
                filter: "blur(12px)",
                scale: 1.06,
                opacity: 0.85,
              },
              {
                filter: "blur(0px)",
                scale: 1,
                opacity: 1,
                yPercent: 0,
                ease: "power2.out",
              }
            )
            .to(imageRef.current, {
              filter: "blur(4px)",
              scale: 1.02,
              opacity: 0.92,
              yPercent: isDesktop ? -20 : 0,
              ease: "power2.in",
            });
        }
      );

      return () => mm.revert();
    },
    { scope: imageRef }
  );
  return (
    <div className="h-full w-full" ref={imageRef}>
      {children}
    </div>
  );
};

export default ImageAnimation;
