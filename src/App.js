import React, { useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";
import LayerDark from "./components/LayerDark";

import "./style.css";
import LogoPreto from "../src/img/logopreto.svg";

function App() {
  const [activeSobre, setActiveSobre] = useState(" ");
  const handleClickAdd = () => setActiveSobre("-active");
  const handleClickRemove = () => setActiveSobre("");

  const [activeCard, setActiveCard] = useState(" ");
  const handleClickCardAdd = () => setActiveSobre("-active");
  const handleClickCardRemove = () => setActiveCard(" ");

  return (
    <>
      <div className="wrap">
        <Header logo={LogoPreto} onClick={handleClickAdd} />
        <Board className={activeCard} onClick={handleClickCardRemove} />
        <Footer logo={LogoPreto} />
      </div>
      <LayerDark className={activeSobre} onClick={handleClickRemove} />
    </>
  );
}

export default App;
