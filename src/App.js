import React, { Component } from "react";
import films from "./data/films";
import Category from "./components/Category";
import Image from "./components/Image";
import Word from "./components/Word";
import Letters from "./components/Letters";
import "./App.css";

class App extends Component {
  state = {
    categories: [],
    selectedCat: "",
    selectedFilm: "",
    guessedLetters: [],
    wrongGuesses: []
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedCat !== this.state.selectedCat) {
      this.filmSelect();
    }
  }

  catSelect = event => {
    const { value } = event.target;
    this.setState({
      selectedCat: value
    });
  };

  filmSelect = () => {
    let filteredFilms = films.filter(film => {
      return film.category === this.state.selectedCat;
    });
    filteredFilms &&
      this.setState({
        selectedFilm:
          filteredFilms[Math.floor(Math.random() * filteredFilms.length)].title
      });
  };

  letterSelect = letter => {
    const { selectedFilm } = this.state;
    if (!selectedFilm.includes(letter)) {
      this.setState(prevState => ({
        guessedLetters: [...prevState.guessedLetters, letter],
        wrongGuesses: [...prevState.wrongGuesses, letter]
      }));
    } else {
      this.setState(prevState => ({
        guessedLetters: [...prevState.guessedLetters, letter]
      }));
    }
  };

  render() {
    const {
      categories,
      selectedFilm,
      guessedLetters,
      wrongGuesses
    } = this.state;

    return (
      <div className="App">
        <h1>Film Title Hangman</h1>
        <Category categories={categories} onSelect={this.catSelect} />
        <Image wrongGuesses={wrongGuesses} />
        <Word selectedFilm={selectedFilm} guessedLetters={guessedLetters} />
        <Letters letterSelect={this.letterSelect} />
      </div>
    );
  }
}

export default App;
