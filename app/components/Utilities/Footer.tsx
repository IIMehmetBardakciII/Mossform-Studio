import { Link } from "react-router";
import Button from "./Button";
import HoverTextAnimation from "../Animations/HoverTextAnimation";
import ImageAnimation from "../Animations/ImageAnimation";

const Footer = () => {
  return (
    <footer className="container min-h-screen mt-10 max-md:mt-14 pb-6 max-sm:pb-30">
      <span className="block w-full h-px bg-linegray" />
      {/* Footer Intro */}
      <div className="w-full h-dvh flex items-center justify-center flex-col md:gap-10 gap-4">
        <h2 className="max-w-[1200px] display-xl text-black text-center">
          Let’s Create Spaces That Breathe With Nature
        </h2>
        <Button hasCircle variant="var1" text="Get in Touch" />
      </div>
      <span className="block w-full h-px bg-linegray mb-10 max-md:mb-14" />
      {/* Footer Bottom */}
      <div className="w-full flex overflow-hidden max-md:flex-col">
        {/* Left Side */}
        <div className="flex-2">
          {/* Navigations&Social&Info */}
          <div className="flex max-md:flex-col gap-6 ">
            <div className="flex gap-6 max-md:order-2">
                {/* NavLinks */}
            <div className="flex flex-col gap-2 max-md:order-2">
              <span className="display-s">Navigation</span>
              <Link className="body-l-bold textBigContainer" to={"#"}>
                <HoverTextAnimation text="Homepage" />
              </Link>
              <Link className="body-l-bold textBigContainer" to={"/works"}>
                <HoverTextAnimation text="Works" />
              </Link>
              <Link className="body-l-bold textBigContainer" to={"/ourprocess"}>
                <HoverTextAnimation text="Process" />
              </Link>
              <Link className="body-l-bold textBigContainer" to={"/studio"}>
                <HoverTextAnimation text="Studio" />
              </Link>
            </div>
            {/* Social Links */}
            <div className="flex flex-col gap-2 max-md:order-3">
              <span className="display-s">Social</span>
              <Link
                className="body-l-bold textBigContainer"
                to={"/mossform/instagram.com"}
              >
                <HoverTextAnimation text="Instagram" />
              </Link>
              <Link
                className="body-l-bold textBigContainer"
                to={"/mossform/linkedin.com"}
              >
                <HoverTextAnimation text="Linkedin" />
              </Link>
              <Link
                className="body-l-bold textBigContainer"
                to={"/mossform/x.com"}
              >
                <HoverTextAnimation text="X" />
              </Link>
            </div>
            </div>
            {/* Info */}
            <div className="flex flex-col gap-2 max-md:order-1">
              <span className="display-s">Info</span>
              <span className="body-s">
                <span className="font-semibold">A:</span> 101 Days Rd, Grange
                QLD 4051
              </span>
              <span className="body-s">
                <span className="font-semibold">E:</span>{" "}
                info@mossformStudio@gmail.com
              </span>
              <span className="body-s">
                <span className="font-semibold">P:</span> 06 6220 1038
              </span>
              <span className="body-s">
                <span className="font-semibold">H:</span> Monday to Saturday,
                8:30am - 5:00 pm
              </span>
            </div>
          </div>
          {/* Text */}
          <div className="flex flex-col mt-16 max-md:gap-4">
            <div className="w-full flex justify-end">
              <p className="body-s max-w-[460px]">
                We exist to bring people closer to nature through sustainable,
                biophilic architecture, offering calm, modern, nature-driven
                spaces for clients seeking intentional and refined living.
              </p>
            </div>
            <h2 className="display-xl">
              Mossform
              <br /> Architecture
            </h2>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 max-md:mt-4">
          <ImageAnimation>
            <div className="md:aspect-483/582 aspect-272/145 max-h-[582px] min-w-[272px]">
              <img
                src="/images/thumbnailHome.webp"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </ImageAnimation>
        </div>
      </div>
      {/* Small Details */}
      <div className="mt-14 max-md:mt-2 flex justify-between max-md:gap-2 max-md:flex-col">
        <div className="flex items-center gap-12 max-md:gap-2 max-md:flex-col max-md:items-start">
          <span className="body-s max-md:font-semibold max-md:order-3 textBigContainer">© 2025 Mossform Architecture</span>
          <span className="body-s max-md:font-semibold textBigContainer"><Link to={"#"}><HoverTextAnimation text="Privacy Policy"/></Link></span>
          <span className="body-s max-md:font-semibold textBigContainer"><Link to={"#"}><HoverTextAnimation text="Terms Of Service"/></Link></span>
        </div>
          <span className="body-s max-md:font-semibold textBigContainer"><Link to={"#"}><HoverTextAnimation text="Site By Mehmet Bardakci"/></Link></span>
      </div>
    </footer>
  );
};

export default Footer;
