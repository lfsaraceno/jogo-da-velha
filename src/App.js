import React, { useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";
import LayerDark from "./components/LayerDark";

import "./style.css";
import LogoPreto from "../src/img/logopreto.svg";

function App() {
  const [activeSobre, setActiveSobre] = useState(" ");
  const [activeHistoryGame, setActiveHistoryGame] = useState(" ");

  const handleClickAdd = () => setActiveSobre("-active");
  const handleClickRemove = () => setActiveSobre("");

  const handleClickHistoryGame = () => {
    console.log(`CLICK HANDLEHISTORY GAME antes:${activeHistoryGame}`);
    setActiveHistoryGame((old) => (old === " -active" ? "" : " -active"));
  };

  return (
    <main>
      <article className="wrap">
        <Header logo={LogoPreto} onClick={handleClickAdd} />
        <Board
          onClickHistoryGame={handleClickHistoryGame}
          classNameHistoryGame={activeHistoryGame}
        />
        <Footer logo={LogoPreto} />
      </article>
      <LayerDark className={activeSobre} onClick={handleClickRemove} />
    </main>
  );
}

export default App;
