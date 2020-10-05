import React from "react";
import "./styles.css";
import Cards from "../../objects/Cards";

import HistoryGame from "../../objects/HistoryGame";
import ShowEvent from "../ShowEvent";

const Board = ({ classNameHistoryGame, onClickHistoryGame }) => {
  return (
    <section className="board">
      <Cards />
      <Cards />
      <Cards />

      <Cards />
      <Cards />
      <Cards />

      <Cards />
      <Cards />
      <Cards />

      <ShowEvent
        id="show"
        type="checkbox"
        content="Mostrar Eventos"
        onClickHistoryGame={onClickHistoryGame}
      />
      <HistoryGame className={classNameHistoryGame} />
    </section>
  );
};

export default Board;
