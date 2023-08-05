import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import pofileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import recipeAppIcon from '../images/recipeAppIcon.svg';

function Header() {
  const { pathname } = useLocation();
  const pathName = pathname.substring(1);

  function capitalizeWords(str) {
    const words = str.split(/[\s-]+/);
    const capitalizedWords = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    const result = capitalizedWords.join(' ');
    return result;
  }

  const mealsOrDrinks = pathName === 'meals' || pathName === 'drinks';
  const search = (
    <Link to="/search">
      <img
        src={ searchIcon }
        alt="icone do search"
        data-testid="search-top-btn"
      />
    </Link>
  );

  return (
    <header className="header">
      <nav>
        <img src={ recipeAppIcon } alt="icone com coração" />
        <div data-testid="page-title">
          <span>Recipe</span>
          <span>app</span>
        </div>
        <Link to="/profile">
          <img
            src={ pofileIcon }
            alt="icone do profile"
            data-testid="profile-top-btn"
          />
        </Link>
        {
          mealsOrDrinks && search
        }
      </nav>
      <div data-testid="page-title">
        { capitalizeWords(pathName) }
      </div>
    </header>
  );
}

export default Header;
