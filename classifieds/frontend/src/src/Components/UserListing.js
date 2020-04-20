// @flow

import React, { Component } from 'react'
import { Card, Button, Row, Col, Image, Container } from 'react-bootstrap'
import type { User } from '../Config/Types'
import './Styles/Listing.css'

type Props = {
  id: string,
  img?: string,
  title: string,
  user: User,
  style?: {}
}

export default class Listing extends Component<Props> {
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
                <Col md={8}>
                  <Button className='mt-3' variant='outline-primary'>View/Edit Listing</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    )
  }
}
