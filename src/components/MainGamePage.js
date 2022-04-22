import { useState } from "react";

function MainGamePage({ endGame }) {
  const [playerDiсe, setPlayerDiсe] = useState([1, 1, 1, 1, 1]);
  const [opponentDiсe, setOpponentDiсe] = useState([1, 1, 1, 1, 1]);
  const [diceVisible, setDiceVisible] = useState(false);
  const [winnerVisible, setWinnerVisible] = useState(false);

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
    setDiceVisible(true);
    setTimeout(() => setWinnerVisible(true), 2000);
    console.log("play");
  };

  const newPlayGame = () => {
    setDiceVisible(false);
    setWinnerVisible(false);
    setTimeout(playGame, 2000);
  };

  const whoWin = (arr1, arr2) => {
    const totalArr1 = arr1.reduce(function (a, b) {
      return a + b;
    });
    const totalArr2 = arr2.reduce(function (a, b) {
      return a + b;
    });

    if (totalArr1 > totalArr2) {
      return <Winner win={1} />;
    } else if (totalArr2 > totalArr1) {
      return <Winner win={2} />;
    } else {
      return <Winner win={0} />;
    }
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

      {winnerVisible ? whoWin(opponentDiсe, playerDiсe) : null}

      {diceVisible ? (
        <ul>
          {playerDiсe.map((item) => {
            return <Dice dice={item} />;
          })}
        </ul>
      ) : null}

      <h2>Player</h2>
      <button onClick={() => endGame(false)}>End game</button>
      <button onClick={() => newPlayGame()}>Roll the dice</button>
    </>
  );
}

function Dice({ dice }) {
  console.log("dice");

  return (
    <li>
      <img src={require(`../images/dice-png-${dice}.png`)} alt="dice" />
    </li>
  );
}

function Winner({ win }) {
  switch (win) {
    case 1:
      return <h1 className="youLose">You Lose!!!</h1>;
    case 2:
      return <h1 className="youWin">You Win!!!</h1>;
    default:
      return <h1 className="deadHeat">Dead Heat!</h1>;
  }
}

export default MainGamePage;
