// @flow

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import createStore from '../Redux'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GoogleLoginPage from './GoogleLoginPage'
import Account from './Account'
import ViewRide from './ViewRide'
import Rides from './Rides'
import ViewListing from './ViewListing'
import CreateListing from './CreateListing'
import CreateRideRequest from './CreateRideRequest'
import Home from './Home'
import NavBar from '../Components/NavigationBar'

const store = createStore()

function App (){
  return (
    <Provider store={store}>
      <Router>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <NavBar fixed='top' />
          <Switch>
            <Route path='/user' component={Account} />
            <Route path='/rides/:id' component={ViewRide} />
            <Route path='/rides' component={Rides} />
            <Route path='/listing/:id' component={ViewListing} />
            <Route path='/create_listing' component={CreateListing} />
            <Route path='/create_ride_request' component={CreateRideRequest} />
            <Route path='/login' component={GoogleLoginPage} />
            <Route path='/' component={Home} />
          </Switch>
        </Container>
      </Router>
    </Provider>
  )
}

export default App
