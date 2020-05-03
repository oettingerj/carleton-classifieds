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
import Route from '../Components/ProtectedRoute'
import UserActions from '../Redux/UserRedux'

type Props = {
  dispatch: ({}) => void
}

class App extends Component<Props> {
  logout = () => {
    console.log('logged out')
    this.props.dispatch(UserActions.setLoggedIn(false))
  }

  render () {
    return (
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <NavBar logoutFn={this.logout} fixed='top' />
        <Switch>
          <Route path='/user'>
            <Account />
          </Route>
          <Route path='/rides/:id'>
            <ViewRide />
          </Route>
          <Route path='/rides'>
            <Rides />
          </Route>
          <Route path='/listing/:id'>
            <ViewListing />
          </Route>
          <Route path='/create_listing'>
            <CreateListing />
          </Route>
          <Route path='/create_ride_request'>
            <CreateRideRequest />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Container>
    )
  }
}

export default connect()(App)
