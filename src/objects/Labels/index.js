import React from "react";

import "./styles.css";
const Labels = ({ htmlFor, content }) => (
  <label className="label" htmlFor={htmlFor}>
    {content}
  </label>
);

export default Labels;
