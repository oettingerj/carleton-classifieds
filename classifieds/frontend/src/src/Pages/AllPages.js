import React from 'react'
import NavBar from '../Components/NavigationBar'
import Home from './Home'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Account from './Account'
import CreateListing from './CreateListing'
import ViewListing from './ViewListing'
import App from './App'

function AllPages () {
  return (
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
  )
}

export default AllPages
