// @flow

import { Row, Col, Card, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
        <Col md='auto'>
          <SideBar />
        </Col>
        <Col>
          <Container fluid>
            <Row className='mt-3'>
              <h2> Recent Posts </h2>
            </Row>
            <Row sm={4} className='mb-3'>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title> Need a Ride? </Card.Title>
                    <Link to='/create_ride_request'>
                      <Button variant='primary'> Create New Ride Request </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
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
