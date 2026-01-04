import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import Button from "./Button";
import OverlayMenu from "./OverlayMenu";
import ContactUsForm from "./ContactUsForm";
import gsap, { ScrollTrigger } from "~/utility/gsapClient";

const FixedNav = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (!menuRef.current) return;

      gsap.set(menuRef.current, {
        autoAlpha: 0,
        scale: 0.98,
        yPercent: -20,
        pointerEvents: "none",
      });

      const tween = gsap.to(menuRef.current, {
        autoAlpha: 1,
        scale: 1,
        yPercent: 0,
        pointerEvents: "auto",
        ease: "cubic-bezier(0.33, 1, 0.68, 1)",
      });

      ScrollTrigger.create({
        trigger: document.body,
        start: () => `${window.innerHeight + 200} top`,
        end: () => `${window.innerHeight + 300} top`,
        scrub: true,
        animation: tween,
        invalidateOnRefresh: true,
      });
    },
    { scope: menuRef }
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className="fixed top-5 w-full container z-30 invisible"
        ref={menuRef}
      >
        <div className=" flex gap-4 w-full justify-end">
          <div onClick={() => setIsFormOpen(true)} className="max-md:hidden">
            <Button hasCircle text="Contact Us" variant="var1" />
          </div>
          <div onClick={() => setIsOpen(true)}>
            <Button hasCircle={false} text="Menu" variant="var3" />
          </div>
        </div>
      </div>
      <OverlayMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <ContactUsForm isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
    </>
  );
};

export default FixedNav;
