import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [showOverlay, setShowOverlay] = useState(true);

  useGSAP(() => {
    if (!overlayRef.current) return;

    // Fade overlay from 1 -> 0
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "sine.inOut",
      onComplete: () => setShowOverlay(false), // remove from DOM after fade
    });
  }, []);

  return (
    <div className="relative w-full h-full">
      {showOverlay && (
        <div
          ref={overlayRef}
          className="bg-black fixed inset-0 z-200"
          style={{ opacity: 1 }}
        />
      )}
      {children}
    </div>
  );
};

export default PageTransition;
