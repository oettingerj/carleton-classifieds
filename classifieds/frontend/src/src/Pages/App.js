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

const store = createStore()

function App () {
  return (
    <Provider store={store}>
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
