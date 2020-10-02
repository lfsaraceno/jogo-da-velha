import React from "react";
import "./styles.css";
import Cards from "../../objects/Cards";
import Player from "../../objects/Players";
import HistoryGame from "../../objects/HistoryGame";
import ShowEvent from "../ShowEvent";

const Board = ({
  onClick,
  className,
  classHistoryGame,
  onClickHistoryGame,
}) => {
  return (
    <section className="board">
      <div className="game-board">
        <Cards onClick={onClick} className={className}>
          <Player player="" />
        </Cards>
        <Cards onClick={onClick} className={className}>
          <Player player="x" />
        </Cards>
        <Cards onClick={onClick} className={className}>
          <Player player="x" />
        </Cards>

        <Cards onClick={onClick} className={className}>
          <Player player="o" />
        </Cards>
        <Cards onClick={onClick} className={className}>
          <Player player="x" />
        </Cards>
        <Cards onClick={onClick} className={className}>
          <Player player="o" />
        </Cards>

        <Cards onClick={onClick} className={className}>
          <Player player="x" />
        </Cards>
        <Cards onClick={onClick} className={className}>
          <Player player="o" />
        </Cards>
        <Cards onClick={onClick} className={className}>
          <Player player="" />
        </Cards>
      </div>
      <ShowEvent
        onClick={onClickHistoryGame}
        id="show"
        type="checkbox"
        content="Mostrar Eventos"
      />
      <HistoryGame className={classHistoryGame} />
    </section>
  );
};

export default Board;
