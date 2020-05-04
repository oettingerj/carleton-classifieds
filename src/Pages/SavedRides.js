// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import RideComponent from '../Components/Ride'
import ListingGrid from '../Components/ListingGrid'
import type { RideListing } from '../Config/Types'

type Props = {
  rides: RideListing[],
  dispatch?: ({}) => void
}

class SavedRides extends Component<Props> {
  renderListings = () => {
    console.log(this.props.rides)
    const components = []
    for (const ride of this.props.rides) {
      components.push(
        <RideComponent key={ride.id} ride={ride} />
      )
    }
    return components
  }

  render () {
    return (
      <Container>
        <header>
          <h2>Saved Rides</h2>
        </header>
        <ListingGrid listingsPerRow={4}>
          {this.renderListings()}
        </ListingGrid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  rides: state.listings.rides.filter((rides) =>
    state.user.savedRides.includes(rides.id)
  )
})

export default connect(mapStateToProps)(SavedRides)
