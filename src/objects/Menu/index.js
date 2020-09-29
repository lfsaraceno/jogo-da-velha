import React from "react";
import "./styles.css";

const handleClick = () => {
  console.log("CLICK MENU");
};

const Menu = () => {
  return (
    <a className="menu-link" href="#menu" onClick={handleClick}>
      <span className="menu">Menu</span>
    </a>
  );
};
export default Menu;
