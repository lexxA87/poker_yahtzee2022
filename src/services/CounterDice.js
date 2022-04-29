function arrDiceFilter(arr) {
  let arrNum = [];
  for (let i = 0; i < 6; i++) {
    arrNum[i] = arr.filter((num) => num === i + 1);
  }
  // arrNum = arrNum.filter((item) => item.length > 0);
  // console.log(arrNum);
  return arrNum;
}

function counterDice(arr) {
  let sumPoints = 0;
  const tablePoints = [
    [1, 101, 1010, 10100, 101000],
    [2, 122, 1020, 20200, 202000],
    [3, 133, 1030, 30300, 303000],
    [4, 144, 1040, 40400, 404000],
    [5, 155, 1050, 50500, 505000],
    [6, 166, 1060, 60600, 606000],
  ];
  const arrDiceFiltered = arrDiceFilter(arr);

  arrDiceFiltered.forEach((array, i) => {
    if (array.length > 0) {
      sumPoints += tablePoints[i][array.length - 1];
    } else {
      sumPoints += 0;
    }
  });

  if (sumPoints === 15) {
    sumPoints = 1070;
  }
  if (sumPoints === 20) {
    sumPoints = 1080;
  }

  return sumPoints;
}

export default counterDice;
