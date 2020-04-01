import React from "react";
import InstagramIcon from "../../img/instagram.svg";

const Instagram = () => {
  return (
    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={InstagramIcon} alt="Icone Instagran" />
    </a>
  );
};
export default Instagram;
