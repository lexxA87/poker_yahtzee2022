import { useState } from "react";

function MainGamePage({ endGame }) {
  const [playerDiсe, setPlayerDiсe] = useState([1, 1, 1, 1, 1]);
  const [opponentDiсe, setOpponentDiсe] = useState([1, 1, 1, 1, 1]);
  const [diceVisible, setDiceVisible] = useState(false);

  const randomArr = (arr) => {
    return arr.map((item) => {
      const max = 6;
      const min = 1;
      return (item = Math.floor(Math.random() * (max - min + 1)) + min);
    });
  };

  const playGame = () => {
    setPlayerDiсe(randomArr(playerDiсe));
    setOpponentDiсe(randomArr(opponentDiсe));
    setTimeout(() => setDiceVisible(true), 2000);
    console.log("play");
  };

  // const diceElements = (arr) => {
  //   arr.foreach((dice) => {
  //     return <Dice dice={dice} />;
  //   });
  // };

  return (
    <>
      <h2>Opponent</h2>
      {diceVisible ? (
        <ul>
          {opponentDiсe.map((item) => {
            return <Dice dice={item} />;
          })}
        </ul>
      ) : null}

      {diceVisible ? (
        <ul>
          {playerDiсe.map((item) => {
            return <Dice dice={item} />;
          })}
        </ul>
      ) : null}

      <h2>Player</h2>
      <button onClick={() => endGame(false)}>End game</button>
      <button onClick={() => playGame()}>Roll the dice</button>
    </>
  );
}

function Dice({ dice }) {
  console.log("dice");

  return <li>{dice}</li>;
}

export default MainGamePage;
