import React, { useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";
import LayerDark from "./components/LayerDark";

import "./style.css";
import LogoPreto from "../src/img/logopreto.svg";

function App() {
  const [activeSobre, setActiveSobre] = useState(" ");
  const [activeCard, setActiveCard] = useState(" ");
  const [activeHistoryGame, setActiveHistoryGame] = useState(" ");

  const handleClickAdd = () => setActiveSobre("-active");
  const handleClickRemove = () => setActiveSobre("");

  // const handleClickCardAdd = () => setActiveSobre("-active");
  const handleClickCardRemove = () =>
    setActiveCard(() => console.log("CLICK CARD"));

  const handleClickHystoryGame = () => {
    console.log("CLICK HANDLEHISTORY GAME");
    setActiveHistoryGame((old) => (old === " -active" ? "" : " -active"));
  };

  return (
    <main>
      <article className="wrap">
        <Header logo={LogoPreto} onClick={handleClickAdd} />
        <Board
          className={activeCard}
          classHistoryGame={activeHistoryGame}
          onClickHistoryGame={handleClickHystoryGame}
          onClick={handleClickCardRemove}
        />
        <Footer logo={LogoPreto} />
      </article>
      <LayerDark className={activeSobre} onClick={handleClickRemove} />
    </main>
  );
}

export default App;
