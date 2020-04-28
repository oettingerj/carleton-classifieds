// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import ListingComponent from '../Components/Listing'
import ListingGrid from '../Components/ListingGrid'
import type { ItemListing } from '../Config/Types'

type Props = {
  listings: ItemListing[],
  dispatch?: ({}) => void
}

class SavedListings extends Component<Props> {
  renderListings = () => {
    const components = []

    for (const listing of this.props.listings) {
      components.push(
        <ListingComponent key={listing.id} listing={listing} />
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
  listings: state.listings.listings.filter((listing) =>
    state.user.savedListings.includes(listing.id)
  )
})

export default connect(mapStateToProps)(SavedListings)
