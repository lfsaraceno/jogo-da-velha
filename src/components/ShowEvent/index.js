import React from "react";
import Labels from "../../objects/Labels";
import Input from "../../objects/Input";
import "./styles.css";

const ShowEvent = ({ id, type, content }) => {
  return (
    <section className="check">
      <Input id={id} type={type} />
      <Labels htmlFor={id} content={content} />
    </section>
  );
};
export default ShowEvent;
