import React from "react";
import Labels from "../../objects/Labels";
import Input from "../../objects/Input";
import "./styles.css";

const ShowEvent = ({ id, type, content, onClickHistoryGame }) => {
  return (
    <form className="check" onClick={onClickHistoryGame}>
      <Input id={id} type={type} />
      <Labels htmlFor={id} content={content} onClick={onClickHistoryGame} />
    </form>
  );
};
export default ShowEvent;
