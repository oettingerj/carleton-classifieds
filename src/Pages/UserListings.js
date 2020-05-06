// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import ListingComponent from '../Components/UserListing'
import type { ItemListing } from '../Config/Types'

type Props = {
  listings: ItemListing[],
  dispatch?: ({}) => void
}

class UserListings extends Component<Props> {
  renderListings = () => {
    const components = []

    for (const listing of this.props.listings) {
      components.push(
        <ListingComponent id={listing.id} img={listing.img} title={listing.title} user={listing.user} listing={listing} />
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
  listings: state.user.ownListings
})

export default connect(mapStateToProps)(UserListings)
