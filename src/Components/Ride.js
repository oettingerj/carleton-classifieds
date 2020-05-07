// @flow

import React, { Component } from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoIosStarOutline, IoIosStar } from 'react-icons/io'
import type { RideListing } from '../Config/Types'
import UserActions from '../Redux/UserRedux'
import moment from 'moment'
import './Styles/Ride.css'
import { connect } from 'react-redux'

type Props = {
  ride: RideListing,
  style?: {}
}
type State = {
  liked: boolean
}

class RideComponent extends Component<Props, State> {
  dateString: string

  constructor (props: Props) {
    super(props)
    this.state = {
      liked: false
    }

    const dateObj = moment(this.props.ride.datetime)
    this.dateString = dateObj.format('ddd MMM D, h:mm a')
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
    if (this.state.liked == false){
      this.setState({
      liked: true
      })
      this.props.dispatch(UserActions.saveRides(this.props.ride.id))
    }
    if (this.state.liked == true){
      this.setState({
      liked: false
      })
    }
  }

  renderLikeButton = () => {
    if (this.state.liked) {
      return (
        <IoIosStar color='red' size={20} />
      )
    } else {
      return (
        <IoIosStarOutline color='red' size={20} />
      )
    }
  }

  render () {
    return (
      <Card style={this.props.style}>
        <Card.Header>
          <Row>
            <Col>
              <Row>
                <Col className='listingUserSmall text-primary my-auto'>{this.props.ride.user.name}</Col>
              </Row>
              <Row>
                <Col className='secondaryTextSmall text-secondary'>{this.dateString}</Col>
              </Row>
            </Col>
            <Col md='auto' className='d-flex justify-content-end my-auto'>
              <Button onClick={this.handleLikePress} size='sm' className='likeButton'>
                {this.renderLikeButton()}
              </Button>
            </Col>
          </Row>

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

const mapStateToProps = (state) => ({
  user: {
    name: state.user.name,
    id: state.user.id,
    email: state.user.email
  }
})

export default connect(mapStateToProps)(RideComponent)
