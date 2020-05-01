// @flow

import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  logoutFn: () => void
}

export default class NavigationBar extends Component<Props> {
  handleLogout = () => this.props.logoutFn()

  render () {
    return (
      <Navbar sticky='top' bg='light' expand='lg' className='pl-4 pr-3'>
        <Navbar.Brand as={Link} to='/'> CC </Navbar.Brand>
        <Navbar.Collapse className='justify-content-between'>
          <Nav>
            <Nav.Link as={Link} to='/' href='/'>Listings</Nav.Link>
            <Nav.Link as={Link} to='/rides' href='/rides'>Rides</Nav.Link>
            <NavDropdown title="Create" id="basic-nav-dropdown">
              <NavDropdown.Item href="/create_listing">Create Listing</NavDropdown.Item>
              <NavDropdown.Item href="/create_ride_request">Create Rides</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/user' href='/user'>Your Items</Nav.Link>
          </Nav>
          <div className='d-flex flex-row'>
            <Form inline>
              <FormControl type='text' placeholder='Search' className='mr-sm-2' />
              <Button variant='outline-primary'>Search</Button>
            </Form>
            <Nav className='ml-4'>
              <Nav.Link className='text-danger' as={Link} to='/login' href='/login' onClick={this.handleLogout}>Logout</Nav.Link>
            </Nav>
          </div>
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
