// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import UserRideComponent from '../Components/UserRide'
import type { RideListing } from '../Config/Types'

type Props = {
  rides: RideListing[],
}

class UserRides extends Component<Props> {
  renderListings = () => {
    const components = []

    console.log("hello")
    console.log(this.props.rides)

    for (const ride of this.props.rides) {
      components.push(
        <UserRideComponent id={ride.id} img={'https://www.freepnglogos.com/uploads/pin-png/location-pin-connectsafely-37.png'}
        />
      )
    }
    return components
  }

  render () {
    return (
      <Container>
        <header>
          <h2>Your Rides</h2>
        </header>
        <Container>
          {this.renderListings()}
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  rides: state.user.ownListings
})

export default connect(mapStateToProps)(UserRides)
