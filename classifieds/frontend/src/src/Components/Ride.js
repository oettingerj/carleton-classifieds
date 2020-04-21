// @flow

import React, { Component } from 'react'
import { Card, Button, Row, Col, Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import type { RideListing } from '../Config/Types'
import './Styles/Ride.css'

type Props = {
  ride: RideListing,
  style?: {}
}
type State = {
  liked: boolean
}

export default class ListingComponent extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      liked: false
    }
  }

  getPassengerText = () => {
    let passengerText = `${this.props.ride.passengers} `
    if (this.props.ride.passengers > 1) {
      passengerText += 'riders'
    } else {
      passengerText += 'rider'
    }
    return passengerText
  }

  handleLikePress = () => {
    this.setState({
      liked: !this.state.liked
    })
  }

  renderLikeButton = () => {
    if (this.state.liked) {
      return (
        <IoIosHeart color='red' size={20} />
      )
    } else {
      return (
        <IoIosHeartEmpty color='red' size={20} />
      )
    }
  }

  render () {
    return (
      <Card style={this.props.style}>
        <Card.Header className='d-flex justify-content-between'>
          <div className='listingUserSmall text-primary my-auto'>{this.props.ride.user.name}</div>
          <Button onClick={this.handleLikePress} size='sm' className='likeButton'>
            {this.renderLikeButton()}
          </Button>
        </Card.Header>
        <Container fluid className='p-3'>
          <Row>
            <Col className='align-items-center'>
              <Row>
                <Col md={8}>
                  <Row>
                    <Col className='locationTitleSmall text-success'>{this.props.ride.startLocation.name}</Col>
                  </Row>
                  <Row>
                    <Col className='secondaryTextSmall text-secondary'>to</Col>
                  </Row>
                  <Row>
                    <Col className='locationTitleSmall text-danger'>{this.props.ride.endLocation.name}</Col>
                  </Row>
                </Col>
                <Col md={4} className='my-auto text-center text-secondary secondaryTextSmall'>
                  <p>{`${this.props.ride.distance} miles`}</p>
                  <p>{this.getPassengerText()}</p>
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col>
                  <Link to={`/rides/${this.props.ride.id}`}>
                    <Button variant='outline-primary'>View Ride</Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    )
  }
}
