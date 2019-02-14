import React from "react";
import PropTypes from "prop-types";

const Category = props => {
  const { categories, onSelect } = props;

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
  categories: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Category;
