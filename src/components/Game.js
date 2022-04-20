import React, { useState } from "react";
import StartPage from "./StartPage.js";
import MainGamePage from "./MainGamePage.js";

function Game() {
  const [game, setGame] = useState(false);

  return game ? (
    <MainGamePage endGame={setGame} />
  ) : (
    <StartPage startGame={setGame} />
  );
}

export default Game;
