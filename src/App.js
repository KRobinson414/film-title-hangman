import React, { Component } from "react";
import films from "./data/films";
import Category from "./components/Category";
import Image from "./components/Image";
import Word from "./components/Word";
import Letters from "./components/Letters";
import "./App.css";

class App extends Component {
  state = {
    categories: null,
    selectedCat: "",
    guessedLetters: [],
    filmTitle: ""
  };

  componentDidMount() {
    const makeTally = (acc, element) => {
      if (acc[element]) acc[element] += 1;
      if (!acc[element]) acc[element] = 1;
      return acc;
    };
    const categories = Object.keys(
      films.map(film => film.category).reduce(makeTally, [])
    );
    this.setState({ categories });
  }

  catSelect = event => {
    const { value } = event.target;
    this.setState({
      selectedCat: value
    }).then();
  };

  letterSelect = letter => {
    this.setState(prevState => ({
      guessedLetters: [...prevState.guessedLetters, letter]
    }));
  };

  render() {
    const { categories, selectedCat, guessedLetters } = this.state;

    return (
      <div className="App">
        <h1>Film Title Hangman</h1>
        <Category categories={categories} onSelect={this.catSelect} />
        <Image />
        <Word selectedCat={selectedCat} guessedLetters={guessedLetters} />
        <Letters letterSelect={this.letterSelect} />
      </div>
    );
  }
}

export default App;
