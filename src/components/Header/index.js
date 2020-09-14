import React from "react";
import "./styles.css";
import Logo from "../../objects/Logo";
import MenuSobre from "../../objects/MenuSobre";
import Menu from "../../objects/Menu";

const Header = ({ logo }) => {
  return (
    <header className="header">
      <Logo logo={logo} />
      <MenuSobre />
      <Menu />
    </header>
  );
};
export default Header;
