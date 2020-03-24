import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Spotify from "../src/Pages/Spotify";
import Musicapp from "../src/MusicAPP/MusicApp";
import MovieDB from "../src/Pages/MoviesDb";
import Trivai from '../src/Pages/Trivai';

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Component/Pages
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link className="dropdown-item" to="/Spotify">
            Spotify
          </Link>
          <Link className="dropdown-item" to="/Musicapp">
            Musicapp
          </Link>

          <Link className="dropdown-item" to="/MovieDB">
            MovieDB
          </Link>
          <Link className="dropdown-item" to="/Trivia">
            Trivia
          </Link>
        </div>
      </div>

      <Switch>
        <Route exact path="/Spotify">
          <Spotify />
        </Route>
        <Route exact path="/Musicapp">
          <Musicapp />
        </Route>
        <Route exact path="/MovieDB">
          <MovieDB />
        </Route>
        <Route exact path="/Trivia">
          <Trivai />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
