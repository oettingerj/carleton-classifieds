// @flow

import React, { Component } from 'react'
import { Card, Button, Row, Col, Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import UserActions from '../Redux/UserRedux'
import ListingActions from '../Redux/ListingRedux'
import './Styles/Listing.css'
import { connect } from 'react-redux'
import type {ItemListing} from '../Config/Types'

type Props = {
  listing: ItemListing,
  style?: {},
  dispatch: ({}) => void
}
type State = {
  liked: boolean
}

class ListingComponent extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      liked: false
    }
  }

  handleLikePress = () => {
    if (this.state.liked === false) {
      this.setState({
        liked: true
      })
      this.props.dispatch(ListingActions.liked(this.props.listing.id))
      this.props.dispatch(UserActions.saveListings(this.props.listing.id))
    }
    if (this.state.liked === true) {
      this.setState({
        liked: false
      })
      this.props.dispatch(UserActions.unsaveListings(this.props.listing.id))
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
        <Image fluid src={this.props.listing.img} />
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
