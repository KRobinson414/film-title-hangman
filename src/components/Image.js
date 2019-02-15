import React from "react";
import PropTypes from "prop-types";

const Image = ({ wrongGuesses }) => {
  const imageLookup = {
    0: require("../images/start.png"),
    1: require("../images/1.png"),
    2: require("../images/2.png"),
    3: require("../images/3.png"),
    4: require("../images/4.png"),
    5: require("../images/5.png"),
    6: require("../images/6.png"),
    7: require("../images/7.png"),
    8: require("../images/8.png"),
    9: require("../images/9.png"),
    10: require("../images/end.png")
  };
  let image = imageLookup[wrongGuesses.length];

  return (
    <div className="image">
      <img src={image} alt="hangman progress" />
    </div>
  );
};

Image.propTypes = {
  wrongGuesses: PropTypes.array.isRequired
};

export default Image;
