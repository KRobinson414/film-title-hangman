import React, { Component } from "react";
import "./App.css";
import Category from "./components/Category";
import Image from "./components/Image";
import Word from "./components/Word";
import Letters from "./components/Letters";
import Button from "./components/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Category />
        <Image />
        <Word />
        <Letters />
        <Button />
      </div>
    );
  }
}

export default App;
