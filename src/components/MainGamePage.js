import { useState } from "react";
import counterDice from "../services/CounterDice";
import diceCombination from "../services/DiceCombination";

function MainGamePage({ endGame }) {
  const [playerDice, setPlayerDice] = useState([1, 1, 1, 1, 1]);
  const [opponentDice, setOpponentDice] = useState([1, 1, 1, 1, 1]);
  const [diceVisible, setDiceVisible] = useState(false);
  const [winnerVisible, setWinnerVisible] = useState(false);
  const [combinationVisible, setCombinationVisible] = useState(false);

  const randomArr = (arr) => {
    return arr.map((item) => {
      const max = 6;
      const min = 1;
      return (item = Math.floor(Math.random() * (max - min + 1)) + min);
    });
  };

  const playGame = () => {
    setPlayerDice(
      randomArr(playerDice).sort((a, b) => (a > b ? -1 : b > a ? 1 : 0))
    );
    setOpponentDice(
      randomArr(opponentDice).sort((a, b) => (a > b ? -1 : b > a ? 1 : 0))
    );
    setDiceVisible(true);
    // setTimeout(() => setPlayerDice(playerDice.sort()), 1000);
    // setTimeout(() => setOpponentDice(opponentDice.sort()), 1000);
    setTimeout(() => setCombinationVisible(true), 1000);
    setTimeout(() => setWinnerVisible(true), 2000);
    console.log("play");
  };

  const newPlayGame = () => {
    setDiceVisible(false);
    setWinnerVisible(false);
    setTimeout(playGame, 2000);
  };

  const whoWin = (arr1, arr2) => {
    const totalArr1 = counterDice(arr1);
    const totalArr2 = counterDice(arr2);

    if (totalArr1 > totalArr2) {
      return <Winner win={1} />;
    } else if (totalArr2 > totalArr1) {
      return <Winner win={2} />;
    } else {
      return <Winner win={0} />;
    }
  };

  return (
    <div>
      <h2>Opponent</h2>
      {diceVisible ? (
        <>
          <ul>
            {opponentDice.map((item, i) => {
              return <Dice key={i} dice={item} />;
            })}
          </ul>
          {combinationVisible ? (
            <span>{diceCombination(opponentDice)}</span>
          ) : null}
        </>
      ) : null}

      {winnerVisible ? whoWin(opponentDice, playerDice) : null}

      {diceVisible ? (
        <>
          {combinationVisible ? (
            <span>{diceCombination(playerDice)}</span>
          ) : null}
          <ul>
            {playerDice.map((item, i) => {
              return <Dice key={i} dice={item} />;
            })}
          </ul>
        </>
      ) : null}

      <h2>Player</h2>
      <button onClick={() => endGame(false)}>End game</button>
      <button onClick={() => newPlayGame()}>Roll the dice</button>
    </div>
  );
}

function Dice({ dice }) {
  // console.log("dice");

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
