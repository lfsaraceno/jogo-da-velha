import React from "react";
import "./style.css";

import Git from "../../objects/Git";
import Linkdein from "../../objects/Linkedin";
import Facebook from "../../objects/Face";
import Twitter from "../../objects/Twitter";
import Instagram from "../../objects/Instagram";

const Social = () => {
  return (
    <section className="social">
      <Git />
      <Linkdein />
      <Facebook />
      <Twitter />
      <Instagram />
    </section>
  );
};
export default Social;
