// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Tab, Tabs } from 'react-bootstrap'
import UserListings from './UserListings'
import UserRides from './UserRides'
import SavedItems from './SavedListings'
import SavedRides from './SavedRides'

type Props = {

}

class Account extends Component<Props> {
  render () {
    return (
      <Container className='mt-4'>
        <Tabs defaultActiveKey='items' id='userTabs'>
          <Tab title='Starred Items' eventKey='items'>
            <Container className='mt-4'>
              <SavedItems />
              <SavedRides />
            </Container>
          </Tab>
          <Tab title='Your Listings' eventKey='listings'>
            <Container className='mt-4'>
              <UserListings />
              <UserRides />
            </Container>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Account)
