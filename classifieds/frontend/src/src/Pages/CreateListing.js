import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import React, { Component } from 'react'
import SideBar from '../Components/SideBar'

type Props = {

}

const options = ['Clothing', 'Electronics', 'Books', 'Furniture', 'Homeware', 'Tools', 'Rides', 'Outdoor Gear', 'Toys', 'Miscellaneous', 'Tigers']

export default class CreateListing extends Component<Props> {
  render () {
    return (
      <Row>
        <Col md='auto'>
          <SideBar />
        </Col>
        <Container className='ml-auto'>
          <span>&nbsp;&nbsp;</span>
          <Card>
            <Card.Body>
              <Card.Title> Create Listing </Card.Title>
              <Row>
                <Col md={6}>
                  <Form>
                    <Form.Group controlId='1'>
                      <Form.Label>Item Name</Form.Label>
                      <Form.Control placeholder='Ex: Shoes' />
                    </Form.Group>
                  </Form>
                </Col>
                <Col md={6}>
                  <Form.Group controlId='2'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control placeholder='In Dollars' />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId='4'>
                    <Form.Label>Type Of Item</Form.Label>
                    <Form.Control as='select' multiple>
                      <option> Books </option>
                      <option> Clothing </option>
                      <option> Electronics </option>
                      <option> Furniture </option>
                      <option> Homeware </option>
                      <option> Miscellaneous </option>
                      <option> Outdoor Gear </option>
                      <option> Rides </option>
                      <option> Tools </option>
                      <option> Toys </option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId='5'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as='textarea' rows='3' />
                  </Form.Group>
                </Col>
              </Row>
              <Row className='justify-content-md-center'>
                <Form>
                  <Form.File
                    id='6'
                    label='Upload Image of Item'
                    accept='image/png'
                    custom
                  />
                </Form>
              </Row>
              <Row className='justify-content-md-center'>
                <Button className='mt-3' variant='outline-primary'>Submit</Button>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </Row>
    )
  }
  /*
    Card Component: https://react-bootstrap.github.io/components/cards/#images
    Form Component: https://react-bootstrap.github.io/components/forms/
    https://stackoverflow.com/questions/4328947/limit-file-format-when-using-input-type-file
    https://stackoverflow.com/questions/46656476/rendering-empty-space-in-react
  */
}
