// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Nav } from 'react-bootstrap'
import { Link, Switch, Route } from 'react-router-dom'
import UserListings from './UserListings'

type Props = {
  dispatch?: ({}) => void
}

class UserItems extends Component<Props> {
  render () {
    return (
      <Container className='mt-4'>
        <Nav variant='tabs' defaultActiveKey='/user'>
          <Nav.Item>
            <Nav.Link as={Link} href='/user' to='/user'>Saved Items</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} href='/user/listings' to='/user/listings'>Your Listings</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className='mt-4'>
          <Switch>
            <Route exact path='/user' />
            <Route path='/user/listings' component={UserListings} />
          </Switch>
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(UserItems)
