import React from "react";
import "./styles.css";
import Logo from "../../objects/Logo";

const Footer = ({ logo }) => {
  return (
    <section className="footer">
      <span className="copy">©</span>
      <Logo logo={logo} />
    </section>
  );
};

export default Footer;
