import { Link } from "react-router";
import HoverTextAnimation from "~/components/Animations/HoverTextAnimation";
import Button from "~/components/Utilities/Button";

const Page404 = () => {
  return (
    <div className="h-dvh w-full container pt-6">
      <span className="text-black body-s">404 Error — Page Not Found </span>
      <div className="flex flex-col md:gap-8 gap-2 w-full items-center mt-4 max-sm:mt-[22]">
        {/* Image */}
        <img
          src="/images/404Image.webp"
          alt="404"
          className="md:h-[318px] md:w-[522px] max-h-[400px] object-cover "
        />
        {/* Text */}
        <div className="text-black  max-w-[592px] text-center flex flex-col gap-6 max-md:gap-2">
          <h1 className=" display-xl">404</h1>
          <p className="body-base">
            Sometimes the best developments come from unexpected avenues, but
            that address may be in uncharted territory.
          </p>
          <div className="w-full  flex gap-8 max-md:gap-4 justify-center max-md:flex-col max-md:items-center">
            <Link to={"/"}>
              <Button text="Back To Home" hasCircle={false} variant="var1" />
            </Link>
            <Link to={"/works"}>
              <button
                className={`cursor-pointer group textBigContainer px-4 py-3 flex gap-2 items-center rounded-full bg-accent text-black`}
              >
                <HoverTextAnimation
                  text="Explore Works"
                  className="display-base"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
