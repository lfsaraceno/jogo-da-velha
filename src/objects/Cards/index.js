import React, { useState } from "react";
import playerX from "../../img/player-x.svg";
import playerO from "../../img/player-o.svg";
import logoCollab from "../../img/logo-collab.svg";
import "./styles.css";

const Cards = () => {
  const [statePlayer, setStatePlayer] = useState("");
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;
  players[""] = logoCollab;

  const handleClickCard = () => setStatePlayer("x");

  return (
    <button onClick={handleClickCard} className={`cards-game`}>
      <img
        className="player"
        src={players[statePlayer]}
        alt={`Jogador${statePlayer.toUpperCase()}`}
      />
    </button>
  );
};

export default Cards;
