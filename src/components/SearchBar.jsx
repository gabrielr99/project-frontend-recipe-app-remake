import React from 'react';

function SearchBar() {
  return (
    <div>
      <input type="text" name="" id="" placeholder="Search" />
      <div>
        <form action="">
          <label htmlFor="radio-ingredient">
            <input
              type="radio"
              name="radio"
              id="radio-ingredient"
              data-testid="ingredient-search-radio"
            />
            Ingredient
          </label>
          <label htmlFor="radio-name">
            <input
              type="radio"
              name="radio"
              id="radio-name"
              data-testid="name-search-radio"
            />
            Name
          </label>
          <label htmlFor="radio-first-letter">
            <input
              type="radio"
              name="radio"
              id="radio-first-letter"
              data-testid="first-letter-search-radio"
            />
            First letter
          </label>
        </form>
        <button type="submit" data-testid="exec-search-btn">SEARCH</button>
      </div>
    </div>
  );
}

export default SearchBar;
