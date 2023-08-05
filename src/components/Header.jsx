import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import pofileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import recipeAppIcon from '../images/recipeAppIcon.svg';

function Header() {
  const { pathname } = useLocation();
  const pathName = pathname.substring(1);

  const mealsOrDrinks = pathName === 'meals' || pathName === 'DRINKS';
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
          <img src={ pofileIcon } alt="icone do profile" data-testid="profile-top-btn" />
        </Link>
        {
          mealsOrDrinks && search
        }
      </nav>
      <div>
        { pathName.toUpperCase() }
      </div>
    </header>
  );
}

export default Header;
