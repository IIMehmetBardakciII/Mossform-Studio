import HoverTextAnimation from "./HoverTextAnimation";

type ButtonProps = {
  variant: "var1" | "var2" | "var3";
  text: string;
};

const text16px = "text-[16px] leading-none font-display font-medium";
const buttonVariants = {
  var1: " text-white bg-black px-4 py-3 flex gap-2 items-center min-w-[179px]",
  var2: " text-black bg-white px-4 py-3 flex gap-2 items-center",
  var3: "text-black bg-linegray px-2.5 py-2 flex gap-2 items-center",
} as const;
const Button = ({ variant, text }: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer group textBigContainer rounded-full ${buttonVariants[variant]}`}
    >
      {variant !== "var3" && (
        <span className="relative flex items-center justify-center w-3 h-3 ">
          {/* outer circle ping */}
          <span
            className="absolute inset-0 rounded-full bg-white opacity-75
                   group-hover:bg-accent group-hover:animate-ping"
          />

          {/* inner circle */}
          <span
            className="relative inline-flex w-full h-full rounded-full bg-white
                   group-hover:bg-accent group-hover:scale-75
                   transition-transform duration-600  cubic-bezier(0.25, 1, 0.5, 1)"
          />
        </span>
      )}

      <HoverTextAnimation
        text={text}
        className={`${variant === "var1" ? "display-base" : text16px}`}
      />
    </button>
  );
};

export default Button;
