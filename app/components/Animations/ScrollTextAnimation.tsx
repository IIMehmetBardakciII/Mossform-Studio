import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import gsap, { SplitText } from "~/utility/gsapClient";


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
              scrub: 1,
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
