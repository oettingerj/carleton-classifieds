// @flow

import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Account from './Account'
import ViewRide from './ViewRide'
import Rides from './Rides'
import ViewListing from './ViewListing'
import CreateListing from './CreateListing'
import CreateRideRequest from './CreateRideRequest'
import Home from './Home'
import NavBar from '../Components/NavigationBar'
import ProtectedRoute from '../Components/ProtectedRoute'
import UserActions from '../Redux/UserRedux'
import API from '../Services/API'

type Props = {
  dispatch: ({}) => void
}

class App extends Component<Props> {
  api: any

  constructor (props: Props) {
    super(props)
    this.api = API()
  }

  logout = () => {
    console.log('logged out')
    this.props.dispatch(UserActions.setLoggedIn(false))
  }

  render () {
    return (
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <NavBar logoutFn={this.logout} fixed='top' />
        <Switch>
          <ProtectedRoute path='/user'>
            <Account />
          </ProtectedRoute>
          <ProtectedRoute path='/rides/:id'>
            <ViewRide />
          </ProtectedRoute>
          <ProtectedRoute path='/rides'>
            <Rides />
          </ProtectedRoute>
          <ProtectedRoute path='/listing/:id'>
            <ViewListing />
          </ProtectedRoute>
          <ProtectedRoute path='/create_listing'>
            <CreateListing />
          </ProtectedRoute>
          <ProtectedRoute path='/create_ride_request'>
            <CreateRideRequest />
          </ProtectedRoute>
          <ProtectedRoute path='/'>
            <Home />
          </ProtectedRoute>
        </Switch>
      </Container>
    )
  }
}

export default connect()(App)
