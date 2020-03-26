import React from "react";
import "./styles.css";
import Cards from "../../objects/Cards";
import Player from "../../objects/Players";

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
    </section>
  );
};

export default Bord;
