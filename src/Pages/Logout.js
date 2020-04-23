import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import createStore from '../Redux'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GoogleLoginPage from './GoogleLoginPage'
import AllPages from './AllPages'


function Logout () {
  return (
      <Router>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Switch>
            <Route path='/' component={GoogleLoginPage} />
          </Switch>
        </Container>
      </Router>
  )
}

export default Logout
