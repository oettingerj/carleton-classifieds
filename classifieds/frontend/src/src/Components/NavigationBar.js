import { nav } from 'react-bootstrap'
import {Navbar} from 'react-bootstrap'
import React, { Component } from 'react'
import ReactSearchBox from './ReactSearchBox.js';


export default class NavigationBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">CC</a>
        <div class="navbar-collapse collapse w-100">
          <ReactSearchBox/>
        </div>
        <div class="navbar-collapse collapse w-100">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Your Items</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

/*
Spacing: https://getbootstrap.com/docs/4.0/utilities/flex/
Sizing:
  https://getbootstrap.com/docs/4.0/utilities/sizing/
  https://stackoverflow.com/questions/49390642/re-positioning-items-on-navbar-collapse-in-bootstrap
NavigationBar: https://getbootstrap.com/docs/4.1/components/navbar/
*/
