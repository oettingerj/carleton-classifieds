// @flow

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

type Props = {}

export default class NavigationBar extends Component<Props> {
  render () {
    return (
      <Navbar sticky='top' bg='light' expand='lg' className='pl-5 pr-5'>
        <Navbar.Brand as={Link} to='/'>CC</Navbar.Brand>
        <Navbar.Collapse className='justify-content-between'>
          <Nav>
            <Nav.Link as={Link} to='/' href='/'>Listings</Nav.Link>
            <Nav.Link as={Link} to='/rides' href='/rides'>Rides</Nav.Link>
            <Nav.Link as={Link} to='/user' href='/user'>Your Items</Nav.Link>
            <Nav.Link as={Link} to='/login' href='/login'>Login Test</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-primary'>Search</Button>
          </Form>
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
