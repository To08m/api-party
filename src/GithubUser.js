import React, { Component } from 'react'

class GithubUser extends Component {
  render() {
    const { params } = this.props.match

    return (
      <div className="GithubUser">
        <h1>GitHub user: {params.username}</h1>
      </div>
    )
  }
}

export default GithubUser