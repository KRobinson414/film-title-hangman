import React, { Component } from "react";
import PropTypes from "prop-types";

class Letters extends Component {
  state = {
    clickedLetters: []
  };

  handleClick = event => {
    const { letterSelect } = this.props;
    const letter = event.target.value;
    letterSelect(letter);
    this.setState(prevState => ({
      clickedLetters: [...prevState.clickedLetters, letter]
    }));
  };

  render() {
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

    const { clickedLetters } = this.state;

    return (
      <div className="letters">
        {letters.map(letter => (
          <button
            key={letter}
            value={letter}
            onClick={this.handleClick}
            disabled={clickedLetters.includes(letter) ? true : false}
          >
            {letter.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }
}

Letters.propTypes = {
  letterSelect: PropTypes.func.isRequired
};

export default Letters;
