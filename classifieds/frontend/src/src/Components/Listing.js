// @flow

import React, { Component } from 'react'
import { Card, Button, Row, Col, Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import type { User } from '../Config/Types'
import './Styles/Listing.css'

type Props = {
  id: string,
  img?: string,
  title: string,
  user: User,
  style?: {}
}
type State = {
  liked: boolean
}

export default class Listing extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      liked: false
    }
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

  handleLikePress = () => {
    this.setState({
      liked: !this.state.liked
    })
  }

  render () {
    return (
      <Card style={this.props.style} className='listingCard'>
        <Image fluid src={this.props.img} />
        <Container fluid className='p-3'>
          <Row>
            <Col className='listingInfo align-items-center'>
              <Row>
                <Col sm={8}>
                  <div className='listingTitle'>{this.props.title}</div>
                </Col>
                <Col className='d-flex justify-content-end'>
                  <Button onClick={this.handleLikePress} variant='light' size='sm' className='mb-auto'>
                    {this.renderLikeButton()}
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className='listingUser text-primary'>{this.props.user.name}</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to={'/listing/' + this.props.id}>
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
