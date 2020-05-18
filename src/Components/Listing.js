// @flow

import React, { Component } from 'react'
import { Card, Button, Row, Col, Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import UserActions from '../Redux/UserRedux'
import ListingActions from '../Redux/ListingRedux'
import './Styles/Listing.css'
import { connect } from 'react-redux'
import type { ItemListing } from '../Config/Types'

type Props = {
  listing: ItemListing,
  style?: {},
  dispatch: ({}) => void
}

class ListingComponent extends Component<Props, State> {

  handleLikePress = () => {
    if (this.props.listing.sold === false) {
      this.props.dispatch(ListingActions.liked(this.props.listing.id))
      this.props.dispatch(UserActions.saveListings(this.props.listing.id))
    }
    if (this.props.listing.sold === true) {
      this.props.dispatch(ListingActions.unliked(this.props.listing.id))
      this.props.dispatch(UserActions.unsaveListings(this.props.listing.id))
    }
  }

  renderLikeButton = () => {
    if (this.props.listing.sold) {
      return (
        <IoIosStar color='red' size={20} />
      )
    } else {
      return (
        <IoIosStarOutline color='red' size={20} />
      )
    }
  }

  renderImage = () => {
    if (this.props.listing.img && this.props.listing.img.length > 0) {
      return (
        <Image className='listingImage' fluid src={this.props.listing.img} />
      )
    }
    return null
  }

  render () {
    return (
      <Card style={this.props.style}>
        {this.renderImage()}
        <Container fluid className='p-3'>
          <Row>
            <Col className='align-items-center'>
              <Row>
                <Col sm={8}>
                  <div className='listingTitle'>${this.props.listing.price}</div>
                  <div className='listingTitle'>{this.props.listing.title}</div>
                </Col>
                <Col className='d-flex justify-content-end'>
                  <Button onClick={this.handleLikePress} variant='light' size='sm' className='mb-auto'>
                    {this.renderLikeButton()}
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className='listingUser text-primary'>{this.props.listing.user.name}</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to={`/listing/${this.props.listing.id}`}>
                    <Button className='mt-3' variant='outline-primary'>View Listing</Button>
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

export default connect(mapStateToProps)(ListingComponent)
/*
Images:
https://www.npmjs.com/package/react-icons
https://react-icons.github.io/react-icons/
Card Boostrap: https://react-bootstrap.netlify.app/components/cards/#cards
Grid Design Bootsrap: https://react-bootstrap.github.io/layout/grid/
*/
