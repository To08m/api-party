import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import './App.css'
import Poke from './Poke'
import Github from './Github'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>National Pokedex</h1>
          <h3>Gotta catch 'em all</h3>
          <img 
            id="click"
            src="https://www.freeiconspng.com/uploads/pokeball-icon-15.png" 
          />
        </div>
        <ul className="navLinks">
        <li>
            <NavLink to="/github">Github API</NavLink>
          </li>
          <li>
            <NavLink to="/pokemon">Poke API</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/github" component={Github} />
          <Route path="/pokemon" component={Poke} />
          <Route
            render={
              () => (
                <p>To get started, click one of the links above</p>
              )
            }
          />
        </Switch>
          
      </div>
    )
  }
}
export default App
