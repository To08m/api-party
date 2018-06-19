import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Poke.css'
import Mon from './Mon'

class Poke extends Component {
  state = {
    name: '',
  }

  handleChange = (ev) => {
    this.setState({ name: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.name}`)
  }

  render() {
    return (
      <div className="Pokemon" >
        <img id="dex" 
          src="https://static.tumblr.com/eecb19a7a4a6aed08dc9abd6238616ec/qmjablj/ah1na2x1q/tumblr_static_pokedex.png"
        />

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">
              Search for Pokemon
            </button>
          </div>
        </form>

        <Route path="/pokemon/:name" component={Mon} />
      </div>
    )
  }
}

export default Poke