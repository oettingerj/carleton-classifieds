// @flow

import { Navbar, Nav} from 'react-bootstrap'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactSearchBox from './ReactSearchBox.js'

type Props = {}

export default class NavigationBar extends Component<Props> {
  render () {
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#'>CC</Navbar.Brand>
        <Navbar.Collapse className='mr-auto'>
        <ReactSearchBox/>
          <Nav className='ml-auto'>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/user'>Your Items</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
