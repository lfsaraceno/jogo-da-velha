import React from "react";

import "./style.css";
import ImageLogo from "../../img/logo-sobre.svg";
import Logo from "../../objects/Logo";
import MenuSobre from "../../objects/MenuSobre";
import Close from "../../objects/Close";
import AvatarPersona from "../../objects/AvatarPersona";
import Titulo from "../../objects/Titulo";
import Descricao from "../../objects/Descricao";
import SocialMedia from "../SocialMedia";
import Footer from "../Footer";

const LayerDark = ({ className = "", onClick }) => {
  return (
    <section className={`layer-dark ${className}`}>
      <section className="header-sobre">
        <Logo logo={ImageLogo} />
        <MenuSobre content="Voltar" onClick={onClick} />
        <Close onClick={onClick} />
      </section>
      <AvatarPersona />
      <Titulo />
      <Descricao />
      <SocialMedia />
      <Footer logo={ImageLogo} />
    </section>
  );
};
export default LayerDark;
