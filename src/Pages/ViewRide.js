// @flow

import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import React, { Component } from 'react'
import Map from 'google-map-react'
import { fitBounds } from 'google-map-react/utils'
import { connect } from 'react-redux'
import type { RideListing } from '../Config/Types'
import SideBar from '../Components/SideBar'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { GOOGLE_API_KEY } from '../Services/API'
import './Styles/ViewRide.css'
import moment from 'moment'

type Props = {
  ride: RideListing
}

class ViewRide extends Component<Props> {
  center: {}
  zoom: number
  dateString: string

  mapSize = {
    width: 640,
    height: 380
  }

  mapOptions = {
    fullscreenControl: false
  }

  constructor (props: Props) {
    super(props)
    this.center = {}
    this.zoom = 0
    this.dateString = ''
  }

  componentDidMount () {
    if (this.props.ride) {
      this.updateRideInfo()
    }
  }

  componentDidUpdate (oldProps) {
    if (!oldProps.ride && this.props.ride) {
      this.updateRideInfo()
    }
  }

  updateRideInfo = () => {
    const { center, zoom } = fitBounds(this.getBounds(), this.mapSize)
    this.center = center
    this.zoom = zoom

    const dateObj = moment(this.props.ride.datetime)
    this.dateString = dateObj.format('ddd MMM D, h:mm a')
  }

  getBounds = () => {
    const start = {
      lat: this.props.ride.startLocation.latitude,
      lng: this.props.ride.startLocation.longitude
    }
    const end = {
      lat: this.props.ride.endLocation.latitude,
      lng: this.props.ride.endLocation.longitude
    }

    if (start.lat > end.lat) {
      if (start.lng > end.lng) {
        return {
          ne: start,
          sw: end
        }
      } else {
        return {
          nw: start,
          se: end
        }
      }
    } else {
      if (end.lng > start.lng) {
        return {
          ne: end,
          sw: start
        }
      } else {
        return {
          nw: end,
          se: start
        }
      }
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

  renderRide = () => {
    return (
      <Row>
        <Col md='auto'>
          <SideBar />
        </Col>
        <Col>
          <Container className='mt-4'>
            <Card>
              <Card.Body>
                <Container fluid>
                  <Row>
                    <Col>
                      <div style={{ height: '30vw', width: '30vw' }}>
                        <Map
                          bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
                          center={this.center}
                          zoom={this.zoom - 1}
                          options={this.mapOptions}
                        >
                          <FaMapMarkerAlt
                            className='text-success'
                            size={30}
                            lat={this.props.ride.startLocation.latitude}
                            lng={this.props.ride.startLocation.longitude}
                          />
                          <FaMapMarkerAlt
                            className='text-danger'
                            size={30}
                            lat={this.props.ride.endLocation.latitude}
                            lng={this.props.ride.endLocation.longitude}
                          />
                        </Map>
                      </div>
                    </Col>
                    <Col className='m-auto'>
                      <Row className='mb-1'>
                        <Col className='listingUser text-primary'>{this.props.ride.user.name}</Col>
                      </Row>
                      <Row className='mb-3'>
                        <Col className='text-secondary'>{this.dateString}</Col>
                      </Row>
                      <Row style={{ height: '8vw' }}>
                        <Col className='d-flex flex-column justify-content-between'>
                          <Row>
                            <Col className='locationTitle text-success'>{this.props.ride.startLocation.name}</Col>
                          </Row>
                          <Row>
                            <Col className='secondaryText text-secondary'>to</Col>
                          </Row>
                          <Row>
                            <Col className='locationTitle text-danger'>{this.props.ride.endLocation.name}</Col>
                          </Row>
                        </Col>
                        <Col md={4} className='text-center text-secondary secondaryText my-auto'>
                          <p>{`${this.props.ride.distance} miles`}</p>
                          <p>{this.getPassengerText()}</p>
                        </Col>
                      </Row>
                      <Row className='mt-3'>
                        <Col>
                          <Button variant='outline-primary'>I'm Interested</Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
    )
  }

  render () {
    if (this.props.ride) {
      return this.renderRide()
    }
    return null
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id)
  for (const rideListing of state.listings.rides) {
    if (parseInt(rideListing.id) === id) {
      return {
        ride: rideListing
      }
    }
  }
  return {}
}

export default connect(mapStateToProps)(ViewRide)
