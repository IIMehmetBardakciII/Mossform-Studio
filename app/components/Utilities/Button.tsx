import HoverTextAnimation from "../Animations/HoverTextAnimation";

type ButtonProps = {
  variant: "var1" | "var2" | "var3"|"var4";
  text: string;
  isSmall?: boolean;
  hasCircle: boolean;
};

const text16px = "text-[16px] leading-none font-display font-medium";
const buttonVariants = {
  var1: " text-white bg-black min-w-[179px]",
  var2: " text-black bg-white ",
  var3: "text-black bg-linegray ",
  var4:"text-white bg-black "
} as const;
const Button = ({ variant, text, isSmall, hasCircle }: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer group textBigContainer px-4 py-3 flex gap-2 items-center rounded-full ${buttonVariants[variant]}`}
    >
      {hasCircle && (
        <span className="relative flex items-center justify-center w-3 h-3  ">
          {/* outer circle ping */}
          <span
            className={`absolute inset-0 rounded-full  opacity-75 ${(variant==="var1"||variant==="var4")?"bg-white":"bg-black"}
                   group-hover:bg-accent group-hover:animate-ping`}
          />

          {/* inner circle */}
          <span
            className={`relative inline-flex w-full h-full rounded-full ${(variant==="var1"||variant==="var4")?"bg-white":"bg-black"}
                   group-hover:bg-accent group-hover:scale-75
                   transition-transform duration-600  cubic-bezier(0.25, 1, 0.5, 1)`}
          />
        </span>
      )}

      <HoverTextAnimation
        text={text}
        className={`${isSmall ? text16px : "display-base"}`}
      />
    </button>
  );
};

export default Button;
