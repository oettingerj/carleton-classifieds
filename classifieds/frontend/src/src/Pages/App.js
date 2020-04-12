// @flow

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../Components/NavigationBar'
import SideBar from '../Components/SideBar'
import Home from './Home'
import ViewListing from './ViewListing'
import { Provider } from 'react-redux'
import createStore from '../Redux'
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import UserItems from './UserItems'
import Listing from '../Components/Listing'

const store = createStore()

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <NavBar fixed='top' />
          <Switch>
            <Route path='/user' component={UserItems} />
            <Route path='/' component={Home} />
          </Switch>
        </Container>
      </Router>
    </Provider>
  )
}

export default App
