// utility/gsapClient.ts
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/dist/Draggable";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(
  ScrollTrigger,
  Draggable,
  MotionPathPlugin,
  SplitText
);

export default gsap;
export {
  ScrollTrigger,
  Draggable,
  MotionPathPlugin,
  SplitText,
};
