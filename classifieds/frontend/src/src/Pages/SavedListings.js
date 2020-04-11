// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import ListingComponent from '../Components/Listing'
import type { Listing } from '../Config/types'
import UserActions from '../Redux/UserRedux'

type Props = {
  listings: Listing[],
  dispatch?: ({}) => void
}

class SavedListings extends Component<Props> {
  renderListings = () => {
    const components = []

    for (const listing of this.props.listings) {
      components.push(
        <ListingComponent img={listing.img} title={listing.title} user={listing.user} />
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
        <Container>
          {this.renderListings()}
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  listings: state.user.savedListings
})

export default connect(mapStateToProps)(SavedListings)
