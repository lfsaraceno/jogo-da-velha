import React from "react";
import AvatarIcon from "../../img/mulher.png";
import "./styles.css";

const Avatar = () => {
  return (
    <div className="avatar-border">
      <img className="avatar" src={AvatarIcon} alt="Avatar" />
    </div>
  );
};
export default Avatar;
