import React from "react";
import "./styles.css";


const Cards = ({ children }) => {
  let active = ""

  if (children.props.player === "x" || children.props.player === "o") {
    active = " -active"
  }
  
  return <button className={`cards${active}`}>{children}</button>;
};

export default Cards;
