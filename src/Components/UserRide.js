// @flow

import React, { Component } from 'react'
import { Card, Button, Row, Col, Image, Container } from 'react-bootstrap'
import type { User } from '../Config/Types'
import './Styles/Listing.css'
import UserActions from '../Redux/UserRedux'
import ListActions from '../Redux/ListingRedux'
import { connect } from 'react-redux'

type Props = {
  id: string,
  img?: string,
  startLocation?: string,
  endLocation?: string,
  style?: {}
}

class UserRide extends Component<Props> {

  deleteListings = () => {
    this.props.dispatch(UserActions.deleteOwnRides(this.props.id))
    this.props.dispatch(UserActions.unsaveRides(this.props.id))
    this.props.dispatch(ListActions.deleteRides(this.props.id))
  }

  viewEditListings = () => {
  }

  render () {
    return (
      <Card style={this.props.style} className='listingCard'>
        <Container fluid>
          <Row>
            <Col sm={2} className='my-auto'>
              <Image fluid src={this.props.img} />
            </Col>
            <Col className='my-auto listingInfo align-items-center'>
              <Row>
                <Col md={8}>
                  <div className='listingTitle'>{this.props.startLocation} - {this.props.endLocation}</div>
                </Col>
                <Col>
                  <div className='text-primary'>10 people interested</div>
                </Col>
              </Row>
              <Row>
                <Col md={8}>
                  <Button onClick={this.viewEditListings} className='mt-3' variant='outline-primary'>View/Edit Listing</Button>
                  <Button onClick={this.deleteListings} className='mt-3 ml-2' variant='outline-primary'>Delete Listing</Button>
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

})

export default connect(mapStateToProps)(UserRide)
