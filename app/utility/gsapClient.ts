import gsap from "gsap";

// ⚠️ DİKKAT: gsap/all YOK
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/dist/Draggable";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import SplitText from "gsap/SplitText";

// sadece browser’da register edilir
if (typeof window !== "undefined") {
  gsap.registerPlugin(
    ScrollTrigger,
    Draggable,
    MotionPathPlugin,
    SplitText
  );
}

export default gsap;
export {
  ScrollTrigger,
  Draggable,
  MotionPathPlugin,
  SplitText,
};
