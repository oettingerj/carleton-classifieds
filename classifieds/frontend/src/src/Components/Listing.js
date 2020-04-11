// @flow

import React, { Component } from 'react'
import { Card, Button, Row, Col, Image } from 'react-bootstrap'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'

type Props = {
  img?: string,
  imageLocation?: 'top' | 'left',
  title: string,
  user: string,
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
        <Card.Img variant='top' src={this.props.img} className='m-auto w-75' />
      )
    }
    return null
  }

  renderLeftImage = () => {
    if (this.props.imageLocation === 'left') {
      return (
        <Col md={2} className='my-auto'>
          <Image fluid src={this.props.img} />
        </Col>
      )
    }
    return null
  }

  render () {
    return (
      <Card style={this.props.style} className={this.props.imageLocation === 'top' ? 'w-25' : ''}>
        {this.renderTopImage()}
        <Card.Body>
          <Row>
            {this.renderLeftImage()}
            <Col className='my-auto'>
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
            </Col>
          </Row>
        </Card.Body>
      </Card>
    )
  }
}
