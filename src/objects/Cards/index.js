import React from "react";
import "./styles.css";

const Cards = ({ children, onClick, className }) => {
  // let active = "";
  console.log(`onclick: ${onClick}`);
  console.log(`className: ${className}`);
  // if (children.props.player === "x" || children.props.player === "o") {
  //   active = " -active";
  // }

  return (
    <button onClick={onClick} className={`cards${className}`}>
      {children}
    </button>
  );
};

export default Cards;
