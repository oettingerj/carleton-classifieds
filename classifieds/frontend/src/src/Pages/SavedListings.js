// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import ListingComponent from '../Components/Listing'
import ListingGrid from '../Components/ListingGrid'
import type { Listing } from '../Config/Types'

type Props = {
  listings: Listing[],
  dispatch?: ({}) => void
}

class SavedListings extends Component<Props> {
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
          <h2>Saved Items</h2>
        </header>
        <ListingGrid listingsPerRow={4}>
          {this.renderListings()}
        </ListingGrid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  listings: state.listings.savedListings
})

export default connect(mapStateToProps)(SavedListings)
