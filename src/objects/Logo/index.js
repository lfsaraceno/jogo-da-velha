import React from "react";
import LogoPreto from "../../img/logopreto.svg";

const Logo = ({ content = { LogoPreto } }) => {
  return <img className="logo" src={content} alt="Logo CollabCode" />;
};
export default Logo;
