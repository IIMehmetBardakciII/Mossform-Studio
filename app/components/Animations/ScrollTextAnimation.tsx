import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);
const ScrollTextAnimation = ({ children }: { children: React.ReactNode }) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      let splitText = SplitText.create(textRef.current, {
        type: "chars",
        autoSplit: true,
        smartWrap:true,
        onSplit(self) {
          // IMPORTANT: set initial state explicitly
          gsap.set(self.chars, { opacity: 0.5 });

          // Return the animation so GSAP can manage it
          return gsap.to(self.chars, {
            opacity: 1,
            stagger: 0.05,
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              end: "bottom 90%",
              scrub: 2,
              invalidateOnRefresh: true,
            },
          });
        },
      });

      return () => splitText.revert();
    },
    { scope: textRef }
  );
  return <div ref={textRef}>{children}</div>;
};

export default ScrollTextAnimation;
