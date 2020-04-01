import React from "react";

import "./styles.css";

const Input = ({ type = "text", id = "", value = "" }) => (
  <input id={id} type={type} value={value} className="input" />
);

export default Input;
