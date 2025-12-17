import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const ImageAnimation = ({ children }: { children: React.ReactNode }) => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (!imageRef) return;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1.5,
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
            ease: "power2.Out",
          }
        )
        .to(imageRef.current, {
          filter: "blur(4px)",
          scale: 1.02,
          opacity: 0.92,
          ease: "power2.in",
        });
    },
    { scope: imageRef }
  );
  return <div className="h-full" ref={imageRef}>{children}</div>;
};

export default ImageAnimation;
