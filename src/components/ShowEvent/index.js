import React from "react";
import Labels from "../../objects/Labels";
import Input from "../../objects/Input";
import "./styles.css";

const ShowEvent = ({ id, type, content, onClick }) => {
  return (
    <section className="check" onClick={onClick}>
      <Input id={id} type={type} />
      <Labels htmlFor={id} content={content} />
    </section>
  );
};
export default ShowEvent;
