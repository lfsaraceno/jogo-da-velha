import React from "react";
import playerX from "../../img/player-x.svg";
import playerO from "../../img/player-o.svg";
import logoCollab from "../../img/logo-collab.svg";

const Player = ({ player }) => {
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;
  players[""] = logoCollab;

  return (
    <img
      className="player"
      src={players[player]}
      alt={`Jogador${players[player]}`}
    />
  );
};
export default Player;
