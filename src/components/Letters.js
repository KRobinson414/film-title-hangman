import React, { Component } from "react";
// import PropTypes from "prop-types";

export default class Letters extends Component {
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

    return (
      <div className="letters">
        {letters.map(letter => (
          <button key={letter} onClick={this.handleClick}>
            {letter.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  handleClick = event => {
    const { letter } = event.target.innerText;
    console.log(event);
  };
}

Letters.propTypes = {};
