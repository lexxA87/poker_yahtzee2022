function MainGamePage({ endGame }) {
  return (
    <>
      <h2>Apponent</h2>
      <h2>Player</h2>
      <button onClick={() => endGame(false)}>End game</button>
      <button>Roll the dice</button>
    </>
  );
}

export default MainGamePage;
