import React from "react";
import "./styles.css";
import Logo from "../../objects/Logo";
import MenuSobre from "../../objects/MenuSobre";
import Menu from "../../objects/Menu";

const Header = ({ logo, onClick }) => {
  return (
    <header className="header">
      <Logo logo={logo} />
      <MenuSobre onClick={onClick} />
      <Menu onClick={onClick} />
    </header>
  );
};
export default Header;
