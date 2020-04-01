import React from "react";
import Faceicon from "../../img/facebook.svg";

const Facebook = () => {
  return (
    <a
      href="https://www.facebook.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={Faceicon} alt="Facebook Icom" />
    </a>
  );
};
export default Facebook;
