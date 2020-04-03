import React from "react";
import "./styles.css";
import Logo from "../../objects/Logo";

const Footer = ({ content }) => {
  return (
    <section className="footer">
      <span className="copy">©</span>
      <Logo content={content} />
    </section>
  );
};

export default Footer;
