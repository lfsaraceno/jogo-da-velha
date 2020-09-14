import React from "react";

import "./style.css";
import ImageLogo from "../../img/logo-sobre.svg";
import Logo from "../../objects/Logo";
import MenuSobre from "../../objects/MenuSobre";
import Close from "../../objects/Close";
import Avatar from "../../objects/Avatar";
import Titulo from "../../objects/Titulo";
import Descricao from "../../objects/Descricao";
import Social from "../Social";
import Footer from "../Footer";

const Sobre = () => {
  return (
    <section className="sobre">
      <section className="header-sobre">
        <Logo logo={ImageLogo} />
        <MenuSobre />
        <Close />
      </section>
      <Avatar />
      <Titulo />
      <Descricao />
      <Social />
      <Footer logo={ImageLogo} />
    </section>
  );
};
export default Sobre;
