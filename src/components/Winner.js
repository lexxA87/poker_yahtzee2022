import "../App.css";

function Winner({ win }) {
  switch (win) {
    case 1:
      return <h1 className="youLose">You Lose!!!</h1>;
    case 2:
      return <h1 className="youWin">You Win!!!</h1>;
    case 3:
      return <h1 className="deadHeat">Dead Heat!</h1>;
    default:
      return <h1 className="whoWin">Who Will Win???</h1>;
  }
}

export default Winner;
