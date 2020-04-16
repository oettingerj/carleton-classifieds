// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import ListingComponent from '../Components/Listing'
import type { Listing } from '../Config/Types'
import mockListings from '../Mock Data/Listings.json'

type Props = {
  listings: Listing[],
  dispatch?: ({}) => void
}

class SavedListings extends Component<Props> {
  renderListings = () => {
    const components = []

    for (const listing of this.props.listings) {
      components.push(
        <Col md={3}>
          <ListingComponent img={listing.img} title={listing.title} user={listing.user} />
        </Col>
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
          <Row>
            {this.renderListings()}
          </Row>
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  listings: mockListings
})

export default connect(mapStateToProps)(SavedListings)
