// @flow

import React, { Component } from 'react'
import { Card, Button, Row, Col, Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import UserActions from '../Redux/UserRedux'
import './Styles/Listing.css'
import { connect } from 'react-redux'
import SideBar from '../Components/SideBar'
import * as yup from 'yup'
import ListingActions from '../Redux/ListingRedux'
import type { ItemListing, User } from '../Config/Types'
import { Formik } from 'formik'

type Props = {
  listing: ItemListing,
  style?: {},
  liked?: boolean
}
type State = {
  liked: boolean
}

class ListingComponent extends Component<Props, State> {
  static defaultProps = {
    liked: false 
  }
  constructor (props: Props) {
    super(props)
    this.state = {
      liked: false
    }
  }

  handleLikePress = () => {
    this.props.dispatch(UserActions.saveListings(this.props.listing.id))
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
        <Image fluid src={this.props.listing.img} />
        <Container fluid className='p-3'>
          <Row>
            <Col className='align-items-center'>
              <Row>
                <Col sm={8}>
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
