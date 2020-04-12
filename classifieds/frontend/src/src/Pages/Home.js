// @flow

import { Nav, CardColumns, Container, Row, Col, Card, Button } from 'react-bootstrap'
import React, { Component } from 'react'
import Listing from '../Components/Listing'
import SideBar from '../Components/SideBar'


const titles = ['Clothing', 'Electronics', 'Books', 'Furniture', 'Homeware', 'Tools', 'Rides', 'Outdoor Gear', 'Toys', 'Miscellaneous','Tigers']

type Props = {}

export default class Home extends Component<Props> {
  buildCard = (user: string, img: string, title:string, style:string ) => {
    return (
        <Listing user={user} img={img} title={title} style={style}/>
    )
  }

  renderCards = () => {
    const items = []

    for (const title of titles) {
      items.push(this.buildCard("", "https://pmcdeadline2.files.wordpress.com/2020/03/tiger-king.jpg?crop=0px%2C0px%2C1000px%2C560px&resize=681%2C383", title))
    }

    return items
  }

  render () {
    return (
      <Row>
        <Col md="auto">
          <SideBar/>
        </Col>
        <Col>
          <header>
            <h2>  Recent Posts </h2>
          </header>
          <CardColumns>
            <Card>
              <Card.Header> Create Post </Card.Header>
                <Card.Body>
                  <Card.Title>Looking For Something? </Card.Title>
                  <Button variant="primary"> Create New Listing</Button>
                </Card.Body>
            </Card>
            {this.renderCards()}
          </CardColumns>
        </Col>
      </Row>
    )
  }
}
