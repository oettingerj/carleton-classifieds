import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import React, { Component } from 'react'
import SideBar from '../Components/SideBar'
import { connect } from 'react-redux'
import type { RideListing } from '../Config/Types'

type Props = {
  ride: RideListing
}

class ViewRide extends Component<Props> {
  render () {
    return (
      <Row>
        <Col md='auto'>
          <SideBar />
        </Col>
        <Container className='mx-auto mt-4'>
          <Card>
            <Card.Body>
              <Row>
                <Col md={8}>
                  <Card.Img variant='bottom' src={this.props.ride.img} className='w-100' />
                </Col>
                <Col md={2}>
                  <Card.Title>{this.props.ride.title}</Card.Title>
                  <Card.Subtitle>{this.props.ride.user.name}</Card.Subtitle>
                </Col>
                <Col md={2}>
                  <Card.Title>${this.props.ride.price}</Card.Title>
                </Col>
              </Row>
              <Card.Text className='p-2'>{this.props.ride.description}</Card.Text>
              <Row className='justify-content-md-center'>
                <Button variant='outline-primary'>I'm Interested</Button>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id)
  for (const rideListing of state.listings.rides) {
    if (rideListing.id === id) {
      return {
        ride: rideListing
      }
    }
  }
  return {}
}

export default connect(mapStateToProps)(ViewRide)
