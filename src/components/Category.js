import React from "react";
import PropTypes from "prop-types";

const Category = props => {
  const { categories, onSelect, selectedFilm } = props;

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
      {selectedFilm && "Now guess the film!"}
    </div>
  );
};

Category.propTypes = {
  categories: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedFilm: PropTypes.string.isRequired
};

export default Category;
