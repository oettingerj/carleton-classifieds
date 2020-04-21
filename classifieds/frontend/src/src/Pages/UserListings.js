// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import ListingComponent from '../Components/UserListing'
import type { Listing } from '../Config/Types'

type Props = {
  listings: Listing[],
  dispatch?: ({}) => void
}

class UserListings extends Component<Props> {
  renderListings = () => {
    const components = []

    for (const listing of this.props.listings) {
      components.push(
        <ListingComponent id={listing.id} img={listing.img} title={listing.title} user={listing.user} />
      )
    }
    return components
  }

  render () {
    return (
      <Container>
        <header>
          <h2>Your Listings</h2>
        </header>
        <Container>
          {this.renderListings()}
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  listings: state.user.listings
})

export default connect(mapStateToProps)(UserListings)
