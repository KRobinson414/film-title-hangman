import React, { Component } from "react";
import "./App.css";
import Category from "./components/Category";
import Image from "./components/Image";
import Word from "./components/Word";
import Letters from "./components/Letters";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Film Title Hangman</h1>
        <Category />
        <Image />
        <Word />
        <Letters />
      </div>
    );
  }
}

export default App;
