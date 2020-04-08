// @flow

import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'

type Props = {
  img: string,
  title: string,
  user: string,
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
      <Card style={this.props.style}>
        <Card.Img variant='top' src={this.props.img} />
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>{this.props.title}</Card.Title>
            </Col>
            <Col className='d-flex justify-content-end'>
              <Button onClick={this.handleLikePress} variant='light' size='sm'>
                {this.renderLikeButton()}
              </Button>
            </Col>
          </Row>
          <Card.Subtitle>{this.props.user}</Card.Subtitle>
          <Button className='mt-3' variant='outline-primary'>View Listing</Button>
        </Card.Body>
      </Card>
    )
  }
}
