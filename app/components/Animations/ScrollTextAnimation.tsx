import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);
const ScrollTextAnimation = ({ children }: { children: React.ReactNode }) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!textRef) return;

    let splitText = SplitText.create(textRef.current, {
      type: "chars",
    });


    gsap.from(splitText.chars, {
      opacity: 0.5,
      stagger: 0.05,
    //   ease:"power2.inOut",
      scrollTrigger:{
        trigger:textRef.current,
        start:"top 60%",
        end:"bottom 70%",
        scrub:2,
        invalidateOnRefresh:true
      }
    });
  });
  return <div ref={textRef}>{children}</div>;
};

export default ScrollTextAnimation;
