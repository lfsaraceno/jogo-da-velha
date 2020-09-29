import React from "react";
import ImageClose from "../../img/close.svg";
import "./styles.css";

const Close = ({ onClick }) => (
  <img className="close" src={ImageClose} alt="Fechar" onClick={onClick} />
);

export default Close;
