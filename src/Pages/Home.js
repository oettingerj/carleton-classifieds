// @flow

import { Row, Col, Card, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import ListingComponent from '../Components/Listing'
import SideBar from '../Components/SideBar'
import ListingGrid from '../Components/ListingGrid'
import type { ItemListing } from '../Config/Types'
import { connect } from 'react-redux'

type Props = {
  listings: ItemListing[]
}

class Home extends Component<Props> {
  renderCards = () => {
    const items = []
    for (const listing of this.props.listings) {
      items.push(
        <ListingComponent key={listing.id} user={listing.user} listing={listing} />
      )
    }
    return items
  }

  render () {
    return (
      <Row>
        <Col md='auto'>
          <SideBar />
        </Col>
        <Col>
          <Container fluid>
            <Row className='mt-3'>
              <h2> Recent Posts </h2>
            </Row>
            <Row sm={4} className='mb-3'>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title> Something to offer? </Card.Title>
                    <Link to='/create_listing'>
                      <Button variant='primary'> Create New Listing </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className='mx-auto'>
              <Col>
                <ListingGrid listingsPerRow={4}>
                  {this.renderCards()}
                </ListingGrid>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  listings: state.listings.listings
})

export default connect(mapStateToProps)(Home)
