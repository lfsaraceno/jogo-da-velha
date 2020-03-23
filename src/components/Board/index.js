import React from "react";
import "./styles.css";
import Cards from "../../objects/Cards";

const Bord = () => {
  return (
    <section className="board">
      <div className="game-board">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </section>
  );
};

export default Bord;
