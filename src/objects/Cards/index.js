import React from "react";
import "./styles.css";

const Cards = ({ children }) => {
  return <button className="cards -active">{children}</button>;
};

export default Cards;
