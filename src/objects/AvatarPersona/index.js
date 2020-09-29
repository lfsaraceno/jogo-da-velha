import React from "react";
import AvatarIcon from "../../img/mulher.png";
import "./styles.css";

const AvatarPersona = () => {
  return (
    <div className="avatar-persona-border">
      <img className="avatar-persona" src={AvatarIcon} alt="Avatar" />
    </div>
  );
};
export default AvatarPersona;
