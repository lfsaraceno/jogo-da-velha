import React from "react";
import Linkedinicon from "../../img/linkedin.svg";

const Linkdein = () => {
  return (
    <a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={Linkedinicon} alt="Icone Linkedin" />
    </a>
  );
};
export default Linkdein;
