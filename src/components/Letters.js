import React from "react";
import PropTypes from "prop-types";

const Letters = ({ letterSelect }) => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  const handleClick = event => {
    const { letter } = event.target.innerText;
    letterSelect(letter);
  };

  return (
    <div className="letters">
      {letters.map(letter => (
        <button key={letter} value={letter} onClick={handleClick}>
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

Letters.propTypes = {
  Letters: PropTypes.func.isRequired
};

export default Letters;
