// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Tab, Tabs } from 'react-bootstrap'
import UserListings from './UserListings'
import SavedItems from './SavedListings'

type Props = {

}

class Account extends Component<Props> {
  render () {
    return (
      <Container className='mt-4'>
        <Tabs defaultActiveKey='items' id='userTabs'>
          <Tab title='Saved Items' eventKey='items'>
            <Container className='mt-4'>
              <SavedItems />
            </Container>
          </Tab>
          <Tab title='Your Listings' eventKey='listings'>
            <Container className='mt-4'>
              <UserListings />
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
