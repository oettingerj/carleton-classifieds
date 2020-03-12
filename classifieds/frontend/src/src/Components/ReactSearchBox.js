import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <form class="form-inline">
        <input class="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-secondary">
            Search
          </button>
      </form>
    )
  }
}
