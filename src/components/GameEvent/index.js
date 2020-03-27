import React from "react";

import "./styles.css";

const GameEvent = () => {
  return (
    <section className="check">
      <input
        type="checkbox"
        className="input hidden"
        readonly=""
        tabindex="0"
      />
      <label className=" label-event">Mostrar Eventos</label>
    </section>
  );
};
export default GameEvent;
