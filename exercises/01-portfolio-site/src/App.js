import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Skills from './pages/Skills'
import Home from './pages/Home'

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About/">About</Link>
              </li>
              <li>
                <Link to="/Contact/">Contact</Link>
              </li>
              <li>
                <Link to="/Project/">Project</Link>
              </li>
              <li>
                <Link to="/Skills/">Skills</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/About/" component={About} />
            <Route path="/Contact/" component={Contact} />
            <Route path="/Project/" exact component={Project} />
            <Route path="/Skills/" exact component={Skills} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
