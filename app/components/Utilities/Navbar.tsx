import { Link, NavLink, useLocation } from "react-router";
import Button from "./Button";
import HoverTextAnimation from "../Animations/HoverTextAnimation";
import HamburgerMenu from "./HamburgerMenu";

type NavbarProps = {
  btnVariation: "var1" | "var2" | "var3" | "var4";
  variation: "var1" | "var2" | "var3";
};

const links = [
  {
    to: "/works",
    text: "Works",
  },
  {
    to: "/process",
    text: "Process",
  },
  {
    to: "/studio",
    text: "Studio",
  },
];

const styles = {
  var1: "text-white",
  var2: "text-gray",
  var3: "text-black",
};
const getLinkClass = (
  isActive: boolean,
  variation: NavbarProps["variation"]
) => {
  if ((variation === "var1" || variation === "var3") && isActive)
    return "text-linegray";
  if (variation === "var2" && isActive) return "text-white";
};
const Navbar = ({ variation, btnVariation }: NavbarProps) => {
  const location = useLocation();
  return (
    <nav className={`pt-6 flex w-full relative z-40 ${styles[variation]}`}>
      <div className="container flex justify-between items-center">
        <Link
          to={"/"}
          className="display-m "
          state={{ internalHomeClick: location.pathname === "/" }}
        >
          Mossform
        </Link>
        <div className="md:flex hidden items-center lg:gap-[220px] md:gap-[65px]    ">
          {/*  NavLinks */}
          <div className="flex gap-4 ">
            {links.map((link, index) => (
              <div key={link.text} className="body-base flex gap-4">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `${getLinkClass(isActive, variation)} text-container textBigContainer`
                  }
                >
                  <HoverTextAnimation text={link.text} />
                </NavLink>
                {index < links.length - 1 && <span>,</span>}
              </div>
            ))}
          </div>
          {/* Contact Us Btn */}
          <div className="btn">
            <Button hasCircle={true} variant={btnVariation} text="Contact Us" />
          </div>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden flex">
        <HamburgerMenu isSmall />
      </div>
    </nav>
  );
};

export default Navbar;
