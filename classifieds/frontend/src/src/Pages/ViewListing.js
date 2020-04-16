import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import React, { Component } from 'react'
import SideBar from '../Components/SideBar'
import { connect } from 'react-redux'
import type { User } from '../Config/Types'

type Props = {
  img: string,
  title: string,
  user: User,
  description: string,
  price: number
}

class ViewListing extends Component<Props> {
  render () {
    return (
      <Row>
        <Col md='auto'>
          <SideBar />
        </Col>
        <Container className='mx-auto mt-4'>
          <Card style={{}}>
            <Card.Body>
              <Row>
                <Col md={8}>
                  <Card.Img variant='bottom' src={this.props.img} className='w-100' />
                </Col>
                <Col md={2}>
                  <Card.Title>{this.props.title}</Card.Title>
                  <Card.Subtitle>{this.props.user.name}</Card.Subtitle>
                </Col>
                <Col md={2}>
                  <Card.Title>${this.props.price}</Card.Title>
                </Col>
              </Row>
              <Card.Text className='p-2'>{this.props.description}</Card.Text>
              <Row className='justify-content-md-center'>
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

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id)
  for (const listing of state.listings.listings) {
    if (listing.id === id) {
      return {
        img: listing.img,
        title: listing.title,
        user: listing.user,
        description: listing.description,
        price: listing.price
      }
    }
  }
  return {}
}

export default connect(mapStateToProps)(ViewListing)
