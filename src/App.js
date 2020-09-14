import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Sobre from "./components/Sobre";

import "./style.css";
import LogoPreto from "../src/img/logopreto.svg";

function App() {
  return (
    <>
      <div className="wrap">
        <Header logo={LogoPreto} />
        <Board />
        <Footer logo={LogoPreto} />
      </div>
      <Sobre />
    </>
  );
}

export default App;
