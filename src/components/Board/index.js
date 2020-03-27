import React from "react";
import "./styles.css";
import Cards from "../../objects/Cards";
import Player from "../../objects/Players";
import ShowEvent from "../ShowEvent";

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
      <ShowEvent id="show" type="checkbox" content="Mostrar Eventos" />
    </section>
  );
};

export default Bord;
