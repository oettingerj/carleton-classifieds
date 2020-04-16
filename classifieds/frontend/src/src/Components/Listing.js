// @flow

import React, { Component } from 'react'
import { Card, Button, Row, Col, Image, Container } from 'react-bootstrap'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import type { User } from '../Config/Types'
import './Styles/Listing.css'

type Props = {
  img?: string,
  imageLocation?: 'top' | 'left',
  title: string,
  user: User,
  style?: {}
}
type State = {
  liked: boolean
}

export default class Listing extends Component<Props, State> {
  static defaultProps = {
    imageLocation: 'top'
  }

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

  renderTopImage = () => {
    if (this.props.imageLocation === 'top') {
      return (
        <Image fluid rounded src={this.props.img} className='mx-auto my-2 w-75' />
      )
    }
    return null
  }

  renderLeftImage = () => {
    if (this.props.imageLocation === 'left') {
      return (
        <Col sm={2} className='my-auto'>
          <Image fluid src={this.props.img} />
        </Col>
      )
    }
    return null
  }

  render () {
    return (
      <Card style={this.props.style} className='listingCard'>
        {this.renderTopImage()}
        <Container fluid>
          <Row>
            {this.renderLeftImage()}
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
                  <div className='listingUser'>{this.props.user.name}</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button className='mt-3' variant='outline-primary'>View Listing</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    )
  }
}
