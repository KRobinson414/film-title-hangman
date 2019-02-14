import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Image extends Component {
  state = {
    images: [""]
  };
  render() {
    return (
      <div className="image">
        <img src={require("../images/start.png")} alt="start" />
      </div>
    );
  }
}

Image.propTypes = {
  wrongGuesses: PropTypes.array.isRequired
};
