import React from "react";
import "./styles.css";
import Cards from "../../objects/Cards";
import Player from "../../objects/Players";
import GameEvent from "../GameEvent";

const Bord = () => {
  return (
    <section className="board">
      <div className="game-board">
        <Cards>
          <Player player="" />
        </Cards>
        <Cards>
          <Player player="x" />
        </Cards>
        <Cards>
          <Player player="x" />
        </Cards>

        <Cards>
          <Player player="o" />
        </Cards>
        <Cards>
          <Player player="x" />
        </Cards>
        <Cards>
          <Player player="o" />
        </Cards>

        <Cards>
          <Player player="x" />
        </Cards>
        <Cards>
          <Player player="o" />
        </Cards>
        <Cards>
          <Player player="" />
        </Cards>
      </div>
      <GameEvent />
    </section>
  );
};

export default Bord;
