// @flow

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../Components/NavigationBar'
import Home from './Home'
import { Provider } from 'react-redux'
import createStore from '../Redux'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Account from './Account'
import CreateListing from './CreateListing'
import ViewListing from './ViewListing'
import GoogleLogin from 'react-google-login';
import {Redirect} from 'react-router-dom'

const store = createStore()

const responseGoogle = (response) => {
  console.log('hello')
  return <Redirect to={'/create_listing'} />
}

const responseFail = (response) => {
  return <Redirect to={Account} />
}

function App () {
  return (

     <Provider store={store}>
     <GoogleLogin
      clientId="118120065426-b4m3d8qog18tvtct6p5atkg0249dmds5.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseFail}
      cookiePolicy={'single_host_origin'}
      />
      <Router>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <NavBar fixed='top' />
          <Switch>
            <Route path='/user' component={Account} />
            <Route path='/listing/:id' component={ViewListing} />
            <Route path='/create_listing' component={CreateListing} />
            <Route path='/' component={Home} />
          </Switch>
        </Container>
      </Router>
    </Provider>
  )
}

export default App
