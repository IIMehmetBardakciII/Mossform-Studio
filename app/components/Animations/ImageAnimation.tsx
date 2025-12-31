import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const ImageAnimation = ({ children }: { children: React.ReactNode }) => {
  const imageRef = useRef<HTMLDivElement | null>(null);
   useGSAP(
    (context) => {
      if (!imageRef.current) return;

      // ✅ MATCHMEDIA SCOPED TO CONTEXT
      const mm = gsap.matchMedia(context);

      mm.add(
        {
          isDesktop: "(min-width:768px)",
          mobile: "(max-width: 767px)",
        },
        (ctx) => {
          const { isDesktop } = ctx.conditions!;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 80%",
              end: "bottom 40%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          tl.fromTo(
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
              ease: "power2.out",
            }
          ).to(imageRef.current, {
            filter: "blur(4px)",
            scale: 1.02,
            opacity: 0.92,
            yPercent: isDesktop ? -20 : 0,
            ease: "power2.in",
          });

          // ✅ EXPLICIT CLEANUP
          return () => {
            tl.kill();
          };
        }
      );

      // ✅ matchMedia cleanup
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
