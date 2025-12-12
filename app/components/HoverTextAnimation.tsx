const HoverTextAnimation = ({ text,className }: { text: string,className?:string }) => {
  return (
    <span
      className={`text-container ${className}`}
    >
      <span className="first-text">{text}</span>
      <span className="second-text ">{text}</span>
    </span>
  );
};

export default HoverTextAnimation;
