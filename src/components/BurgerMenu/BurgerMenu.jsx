import { useState } from "react";
import "./BurgerMenu.css";

function BurgerMenu() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={`burger-menu ${open ? "open" : ""}`} onClick={handleClick}>
      <span className="burger-line line1"></span>
      <div className="burger-line-wrapper">
        <span className="burger-line line2"></span>
        <span
          className={`burger-line line2-duplicate ${open ? "rotate" : ""}`}
        ></span>
      </div>
      <span className="burger-line line3"></span>
    </div>
  );
}

export default BurgerMenu;
