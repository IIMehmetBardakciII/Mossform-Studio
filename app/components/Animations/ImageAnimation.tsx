import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import gsap from "~/utility/gsapClient";

const ImageAnimation = ({ children }: { children: React.ReactNode }) => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (!imageRef.current) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width:768px)",
          mobile: "(max-width: 767px)",
        },
        (context) => {
          const { isDesktop } = context.conditions!;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 80%",
              end: "bottom 40%",
              scrub: 1.5,
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
