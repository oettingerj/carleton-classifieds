// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import Listing from '../Components/Listing'

type Props = {
  dispatch?: ({}) => void
}

class UserListings extends Component<Props> {
  render () {
    return (
      <Container>
        <header>
          <h2>Your Listings</h2>
        </header>
        <Container>
          <Listing img='' title='Shelf' user='Josh Oettinger' />
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(UserListings)
