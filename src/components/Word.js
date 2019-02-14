import React, { Component } from "react";
import PropTypes from "prop-types";
import "../data/films";

export default class Word extends Component {
  state = {};

  render() {
    const { selectedCat, guessedLetters } = this.props;
    return <div className="word">Word</div>;
  }
}

Word.propTypes = {
  selectedCat: PropTypes.string.isRequired,
  guessedLetters: PropTypes.array.isRequired
};
