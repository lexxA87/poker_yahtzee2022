import "./Game.css";

function Dice({ arr, visibilityClass }) {
  // console.log("dice");

  return (
    <div className={visibilityClass}>
      <ul>
        {arr.map((item, i) => {
          return (
            <li key={i}>
              <img
                src={require(`../../images/dice-png-${item}.png`)}
                alt="dice"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dice;
