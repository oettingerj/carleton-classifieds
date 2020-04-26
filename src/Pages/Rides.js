// @flow

import { Row, Col, Container } from 'react-bootstrap'
import React, { Component } from 'react'
import Ride from '../Components/Ride'
import SideBar from '../Components/SideBar'
import ListingGrid from '../Components/ListingGrid'
import type { RideListing } from '../Config/Types'
import { connect } from 'react-redux'

type Props = {
  rides: RideListing[]
}

class Rides extends Component<Props> {
  renderCards = () => {
    const items = []
    for (const ride of this.props.rides) {
      items.push(
        <Ride key={ride.id} user={ride.user} ride={ride} />
      )
    }
    return items
  }

  render () {
    return (
      <Row>
        <Col md={1}>
          <SideBar />
        </Col>
        <Col md={11}>
          <Container fluid>
            <Row className='justify-content-md-center'>
              <h2> Upcoming Rides </h2>
            </Row>
            <Row className='mx-auto'>
              <Col>
                <ListingGrid listingsPerRow={4}>
                  {this.renderCards()}
                </ListingGrid>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  rides: state.listings.rides
})

export default connect(mapStateToProps)(Rides)
