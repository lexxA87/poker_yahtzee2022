import logo from "../images/dice_logo.png";
import "../App.css";

function StartPage({ startGame }) {
  return (
    <div className="AppWraper">
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Play Poker Dice with us!!!</p>

        <div className="d-grid gap-2 col-3 mx-auto">
          <button
            className="btn btn-outline-light btn-lg shadow"
            type="button"
            onClick={() => startGame(true)}
          >
            PLAY{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
