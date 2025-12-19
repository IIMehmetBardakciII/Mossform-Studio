import { Link, NavLink } from "react-router";
import Button from "./Button";
import HoverTextAnimation from "../Animations/HoverTextAnimation";
import HamburgerMenu from "./HamburgerMenu";

type NavbarProps = {
  variation: "var1" | "var2";
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
const getLinkClass = (
  isActive: boolean,
  variation: NavbarProps["variation"]
) => {
  if (variation === "var1") return "text-white";
  return isActive ? "text-white" : "text-gray";
};
const Navbar = ({ variation }: NavbarProps) => {
  return (
    <nav className="pt-6 flex w-full relative z-40 ">
      <div className="container flex justify-between items-center">
        <Link to={"/"} className="display-m text-white ">
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
                {index < links.length - 1 && (
                  <span className="text-white">,</span>
                )}
              </div>
            ))}
          </div>
          {/* Contact Us Btn */}
          <div className="btn">
            <Button hasCircle={true} variant="var1" text="Contact Us" />
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
