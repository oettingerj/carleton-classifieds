import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap'
import React, { Component } from 'react'
import SideBar from '../Components/SideBar'
import { connect } from 'react-redux'
import type { ItemListing } from '../Config/Types'

type Props = {
  listing: ItemListing
}

type State = {
  showModal: boolean
}

class ViewListing extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  handleModalClose = () => {
    this.setState({ showModal: false })
    this.props.history.push('/')
  }

  handleSubmit = () => {
    this.setState({ showModal: true })
  }

  renderListing = () => {
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
                  <Card.Img variant='bottom' src={this.props.listing.img} className='w-100' />
                </Col>
                <Col md={2}>
                  <Card.Title>{this.props.listing.title}</Card.Title>
                  <Card.Subtitle>{this.props.listing.user.name}</Card.Subtitle>
                </Col>
                <Col md={2}>
                  <Card.Title>${this.props.listing.price}</Card.Title>
                </Col>
              </Row>
              <Card.Text className='p-2'>{this.props.listing.description}</Card.Text>
              <Row className='justify-content-md-center'>
                <Button variant='outline-primary' onClick={this.handleSubmit}>I'm Interested</Button>
              </Row>
            </Card.Body>
          </Card>
        </Container>
        <Modal centered show={this.state.showModal}>
          <Modal.Header>Contact: {this.props.listing.user.name}</Modal.Header>
          <Modal.Body> <p>Email: {this.props.listing.user.email}</p> </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={this.handleModalClose}>
              Back to Home
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    )
  }

  render () {
    if (this.props.listing) {
      return this.renderListing()
    }
    return null
  }

  /*
    Card Component: https://react-bootstrap.github.io/components/cards/#images
    https://stackoverflow.com/questions/46656476/rendering-empty-space-in-react
  */
}

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id)
  for (const listing of state.listings.listings) {
    if (parseInt(listing.id) === id) {
      return { listing }
    }
  }
  return {}
}

export default connect(mapStateToProps)(ViewListing)
