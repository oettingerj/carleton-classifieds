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
  title: string,
  user: User,
  style?: {}
}

class Listing extends Component<Props> {

  deleteListings = () => {
    this.props.dispatch(UserActions.deleteOwnListings(this.props.id))
    this.props.dispatch(UserActions.unsaveListings(this.props.id))
    this.props.dispatch(ListActions.deleteListings(this.props.id))
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
                  <div className='listingTitle'>{this.props.title}</div>
                </Col>
                <Col>
                  <div className='text-primary'>10 people interested</div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
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

export default connect(mapStateToProps)(Listing)
