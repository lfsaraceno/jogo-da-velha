import React from "react";
import "./styles.css";

const Sobre = ({ content = "Sobre", onClick }) => {
  return (
    <a className="menu-sobre" href="#main" onClick={onClick}>
      {content}
    </a>
  );
};
export default Sobre;
