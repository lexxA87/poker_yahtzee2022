import logo from "../images/dice_logo.png";
import "../App.css";

function StartPage({ startGame }) {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Play poker Yahtzee with us!!!</p>
      <button onClick={() => startGame(true)}>PLAY</button>
    </>
  );
}

export default StartPage;
