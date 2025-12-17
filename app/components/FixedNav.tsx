import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";
import OverlayMenu from "./OverlayMenu";

gsap.registerPlugin(ScrollTrigger);
const FixedNav = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      const tween = gsap.fromTo(
        menuRef.current,
        { opacity: 0, scale: 0.98, yPercent: -20 },
        {
          opacity: 1,
          scale: 1,
          yPercent: 0,
          ease: "cubic-bezier(0.33, 1, 0.68, 1)",
        }
      );

      ScrollTrigger.create({
        trigger: document.body,
        start: () => `${window.innerHeight + 200} top`,
        end: () => `${window.innerHeight + 300} top`,
        scrub: true,
        animation: tween,
        invalidateOnRefresh: true,
      });

      // return () => {
      //   (trigger.kill(), tween.kill());
      // };
    },
    { scope: menuRef }
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="fixed top-5 w-full container   z-30" ref={menuRef}>
        <div className=" flex gap-4 w-full justify-end">
          <div className="max-md:hidden">
            <Button text="Contact Us" variant="var1" />
          </div>
          <div  onClick={() => setIsOpen(true)}>
            <Button text="Menu" variant="var3" />
          </div>
        </div>
      </div>
      <OverlayMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default FixedNav;
