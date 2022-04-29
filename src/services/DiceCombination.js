import counterDice from "./CounterDice";

function diceCombination(arr) {
  const points = counterDice(arr);
  let combination = "";

  if (points > 100 && points < 180) {
    combination = "PAIR";
  } else if (points > 220 && points < 330) {
    combination = "TWO PAIRS";
  } else if (points > 1014 && points < 1070) {
    combination = "SET";
  } else if (points === 1070) {
    combination = "SMALL STRAIGHT";
  } else if (points === 1080) {
    combination = "BIG STRAIGHT";
  } else if (points > 1130 && points < 1220) {
    combination = "FULL HOUSE";
  } else if (points > 10100 && points < 10610) {
    combination = "FOUR";
  } else if (points > 100000) {
    combination = "POKER";
  } else if (points < 20) {
    combination = "NOTHING";
  } else {
    combination = "anything wrong...";
  }

  return combination;
}

export default diceCombination;
