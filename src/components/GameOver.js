import React from "react";
import PropTypes from "prop-types";

const GameOver = ({ resetGame }) => {
  return (
    <div className="game-over">
      <h1>YOU LOSE!</h1>
      <button onClick={resetGame}>Try again?</button>
    </div>
  );
};

GameOver.propTypes = {
  resetGame: PropTypes.func.isRequired
};

export default GameOver;
