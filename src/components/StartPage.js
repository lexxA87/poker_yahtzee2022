import StartPageAnimation from "./animations/startPageAnimation/StartPageAnimation";
import Menu from "./menu/Menu";

function StartPage({ startGame }) {
  return (
    <StartPageAnimation>
      <Menu />
    </StartPageAnimation>
  );
}

export default StartPage;

// {/* <div className="AppWraper">
//       <div className="App">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Play Poker Dice with us!!!</p>

//         <div className="d-grid gap-2 col-3 mx-auto">
//           <button
//             className="btn btn-outline-light btn-lg shadow"
//             type="button"
//             onClick={() => startGame(true)}
//           >
//             PLAY{" "}
//           </button>
//         </div>
//       </div>
//     </div> */}
