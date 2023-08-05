import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Recipes from './pages/Recipes';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals" component={ Recipes } />
        <Route exact path="/drinks" component={ Recipes } />
        <Route exact path="/meals/:id-da-receita" component={ Recipes } />
        <Route exact path="/drinks/:id-da-receita" component={ Recipes } />
        <Route exact path="/meals/:id-da-receita/in-progress" component={ Recipes } />
        <Route exact path="/drinks/:id-da-receita/in-progress" component={ Recipes } />
        <Route exact path="/profile" component={ Recipes } />
        <Route exact path="/done-recipes" component={ Recipes } />
        <Route exact path="/favorite-recipes" component={ Recipes } />
      </Switch>
    </div>
  );
}

export default App;
