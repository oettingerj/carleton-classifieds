// @flow

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import createStore from '../Redux'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GoogleLoginPage from './GoogleLoginPage'
import AllPages from './AllPages'

const store = createStore()

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Switch>
            <Route path='/AllPages' component={AllPages} />
            <Route path='/' component={GoogleLoginPage} />
          </Switch>
        </Container>
      </Router>
    </Provider>
  )
}

export default App
