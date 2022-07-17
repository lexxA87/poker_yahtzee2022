import { useState } from "react";
import { useNavigate } from "react-router-dom";
import counterDice from "../../services/CounterDice";
import diceCombination from "../../services/DiceCombination";
import Buttons from "./Buttons";
import Dice from "./Dice";
import Winner from "./Winner";

function MainGamePage() {
  const visibleClass = "visible";
  const invisibleClass = "invisible";
  const navigate = useNavigate();
  const [playerDice, setPlayerDice] = useState([1, 1, 1, 1, 1]);
  const [opponentDice, setOpponentDice] = useState([1, 1, 1, 1, 1]);
  const [diceVisible, setDiceVisible] = useState(invisibleClass);
  const [combinationVisible, setCombinationVisible] = useState(invisibleClass);
  const [winnerVisible, setWinnerVisible] = useState(false);

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
    setDiceVisible(visibleClass);
    setTimeout(() => setCombinationVisible(visibleClass), 1000);
    setTimeout(() => setWinnerVisible(true), 2000);
  };

  const newPlayGame = () => {
    setDiceVisible(invisibleClass);
    setCombinationVisible(invisibleClass);
    setWinnerVisible(false);
    setTimeout(playGame, 2000);
  };

  const whoWin = (arr1, arr2) => {
    const totalArr1 = counterDice(arr1);
    const totalArr2 = counterDice(arr2);

    if (totalArr1 > totalArr2) {
      return 1;
    } else if (totalArr2 > totalArr1) {
      return 2;
    } else if (totalArr1 === totalArr2) {
      return 3;
    } else {
      return 0;
    }
  };

  const endGame = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Opponent</h2>
      <Dice arr={opponentDice} visibilityClass={diceVisible} />
      <span className={combinationVisible}>
        {diceCombination(opponentDice)}
      </span>

      <Winner win={winnerVisible ? whoWin(opponentDice, playerDice) : 0} />

      <span className={combinationVisible}>{diceCombination(playerDice)}</span>

      <Dice arr={playerDice} visibilityClass={diceVisible} />

      <h2>Player</h2>
      <Buttons endGame={endGame} newPlayGame={newPlayGame} />
    </div>
  );
}

export default MainGamePage;
