import { useState } from "react";
import Button from "./Button";
import OverlayMenu from "./OverlayMenu";

type HamburgerMenuProps = {
  isSmall?: boolean;
};
const HamburgerMenu = ({isSmall}:HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);


  return (
    <>
      <div className="container" onClick={() => setIsOpen(true)}>
        <Button text="Menu" variant="var3" isSmall={isSmall} />
      </div>
      <OverlayMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default HamburgerMenu;
