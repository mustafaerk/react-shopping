import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './View/Home';
import About from './View/About';
import Navbar from "./Components/Navbar/Navbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exect path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
