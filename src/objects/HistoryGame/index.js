import React from "react";
import TagGame from "../TagGame";

const HistoryGame = ({ className }) => (
  <ol className={`history-game${className}`}>
    <li className="action">
      <TagGame content="Adicionou: X" />
    </li>
    <li className="action">
      <TagGame content="Adicionou: O" />
    </li>
    <li className="action">
      <TagGame content="Adicionou: X" />
    </li>
    <li className="action">
      <TagGame content="Adicionou: O" />
    </li>
    <li className="action">
      <TagGame content="Adicionou: X" />
    </li>
    <li className="action">
      <TagGame content="Adicionou: O" />
    </li>
    <li className="action">
      <TagGame content="Adicionou: X" />
    </li>
    <li className="action">
      <TagGame content="Adicionou: O" />
    </li>
    <li className="action">
      <TagGame content="Adicionou: X" />
    </li>
  </ol>
);

export default HistoryGame;
