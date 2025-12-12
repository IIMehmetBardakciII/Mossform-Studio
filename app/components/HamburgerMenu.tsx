import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router";
import HoverTextAnimation from "./HoverTextAnimation";

const links = [
  {
    to: "/",
    text: "Home",
    image: "/images/thumbnailHome.webp",
  },
  {
    to: "/works",
    text: "Works",
    image: "/images/thumbnailWorks.webp",
  },
  {
    to: "/process",
    text: "Process",
    image: "/images/thumbnailProcess.webp",
  },
  {
    to: "/studio",
    text: "Studio",
    image: "/images/thumbnailStudio.webp",
  },
];
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string | null>(
    links[0].image
  );

  return (
    <>
      <div className="container" onClick={() => setIsOpen(true)}>
        <Button text="Menu" variant="var3" />
      </div>
      <div className={`menu-overlay overflow-hidden pt-6 container ${isOpen ? "open" : ""}`}>
        <div className="w-full flex justify-between">
          <Link to={"/"} className="display-m text-gray">
            Mossform
          </Link>

          <button
            className="text-white display-base cursor-pointer textBigContainer"
            onClick={() => setIsOpen(false)}
          >
            <HoverTextAnimation text="Close" />
          </button>
        </div>

        <div className="flex relative max-md:mt-20 max-md:gap-8 max-md:flex-col-reverse md:gap-[clamp(40px,calc(100vw*442/1536),442px)] ">
          {/* Links Part */}
          <div className="flex flex-col gap-14 md:mt-[154px]">
            {/* Big Page Links */}
            <div className="display-xl  flex flex-col  ">
              {links.map((link) => (
                <Link
                  onClick={()=>setIsOpen(false)}
                  onMouseEnter={()=>setCurrentImage(link.image)}
                  onMouseLeave={()=>setCurrentImage(links[0].image)}
                  to={link.to}
                  key={link.to}
                  className="text-gray hover:text-white  w-fit textBigContainer"
                >
                  <HoverTextAnimation text={link.text} />
                </Link>
              ))}
            </div>
            {/* Social Links */}
            <div className="flex gap-4 ">
              {[
                { text: "Instagram", to: "mossform/instagram.com" },
                { text: "Linkedin", to: "mossform/linkedin.com" },
                { text: "X", to: "mossform/x.com" },
              ].map((socialLink) => (
                <Link
                  to={socialLink.to}
                  key={socialLink.to}
                  className="text-gray textBigContainer hover:text-white body-base"
                >
                  <HoverTextAnimation text={socialLink.text} />
                </Link>
              ))}
            </div>
          </div>

          {/*!:todo Stayed here */}
          <div className="mt-8 md:flex relative md:items-center md:aspect-square md:max-w-[466px] md:max-h-[466px] ">
            <p className="max-h-20 max-md:max-w-[300px] md:w-[460px] text-white body-s md:absolute md:top-1/2 md:-left-40 z-10 md:-translate-y-1/2  ">
              We exist to bring people closer to nature through sustainable,
              biophilic architecture, offering calm, modern, nature-driven
              spaces for clients seeking intentional and refined living.
            </p>
            <img
              src={currentImage!}
              alt={currentImage!}
              className="w-full h-full opacity-70 object-contain  max-md:hidden"
            />  
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
