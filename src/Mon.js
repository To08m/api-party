import React, { Component } from 'react'

import images from 'pokemon-images';
import './Poke.css'

class Mon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
      name: '',
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.name !== this.props.match.params.name) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { params } = this.props.match
    
    fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${params.name}/`)
      .then(response => response.json())
      .then(this.state.name = `${params.name}`)
      .then(user => this.setState({ user }))
  }

  render() {
    const { user } = this.state
    const { name } = this.state
    const pic = images.getSprite(name)
    //const stat = user.stats['attack'].stat.name
    //var att = user.stat[5].name
    //var type = user.types[0].name
    const title = name.toUpperCase()
    const height = user.height/10
    const weight = user.weight/10

    return (
      <div className="Mon">
        <img id="pok" src={pic} alt="" />
        <h2>
          <a href={user.html_url} target="_blank">
            {title}
          </a>
        </h2>
        <ul>
            <li>
                id: #{user.id}
            </li>
            <li>
                height: {height} m
            </li>
            <li>
               weight: {weight} kg
            </li>
        </ul>
      </div>
    )
  }
}

export default Mon