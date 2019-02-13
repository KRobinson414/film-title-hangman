import React from "react";
import PropTypes from "prop-types";
import films from "../data/films";

const Category = props => {
  const makeTally = (acc, element) => {
    if (acc[element]) acc[element] += 1;
    if (!acc[element]) acc[element] = 1;
    return acc;
  };
  const categories = Object.keys(
    films.map(film => film.category).reduce(makeTally, [])
  );
  const { onSelect } = props;

  return (
    <div className="category">
      Pick a category...
      <p>
        <select placeholder="category" onChange={onSelect}>
          <option> </option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </p>
      <p>Now guess the film!</p>
    </div>
  );
};

Category.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export default Category;
