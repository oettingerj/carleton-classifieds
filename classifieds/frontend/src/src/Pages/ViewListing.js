import { Nav, Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import React, { Component } from 'react'
import Listing from '../Components/Listing'
import SideBar from '../Components/SideBar'

type Props = {
  img: string,
  title: string,
  user: string,
  description: string,
  price: number
}

export default class ViewListing extends Component<Props> {
  render(){
    return (
      <Row>
        <Col md="auto">
          <SideBar/>
        </Col>
        <Container className="ml-auto">
          <span>&nbsp;&nbsp;</span>
            <Card style={{}}>
              <Card.Body>
                <Row>
                  <Col md={8}>
                    <Card.Img variant="bottom" src={this.props.img} className= "w-100" />
                  </Col>
                  <Col md={2}>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Subtitle>{this.props.user}</Card.Subtitle>
                  </Col>
                  <Col md={2}>
                    <Card.Title>${this.props.price}</Card.Title>
                  </Col>
                </Row>
                <Card.Text className='p-2'>{this.props.description}</Card.Text>
                <Row className="justify-content-md-center">
                  <Button variant='outline-primary'>I'm Interested</Button>
                </Row>
              </Card.Body>
            </Card>
        </Container>
      </Row>
    )
  }

  /*
    Card Component: https://react-bootstrap.github.io/components/cards/#images
    https://stackoverflow.com/questions/46656476/rendering-empty-space-in-react
  */
}
