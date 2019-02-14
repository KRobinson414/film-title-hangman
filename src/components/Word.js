import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Word extends Component {
  state = {};

  render() {
    const { selectedFilm, guessedLetters } = this.props;
    const selectedFilmArr = selectedFilm.split("");

    return (
      <div className="word">
        {selectedFilm &&
          selectedFilmArr.map((letter, index) =>
            guessedLetters.includes(letter) ? (
              <span key={index} className="word-char">
                {letter}
              </span>
            ) : (
              <span key={index}>_</span>
            )
          )}
      </div>
    );
  }
}

Word.propTypes = {
  selectedFilm: PropTypes.string.isRequired,
  guessedLetters: PropTypes.array.isRequired
};
