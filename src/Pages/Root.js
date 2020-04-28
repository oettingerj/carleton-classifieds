import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import createStore from '../Redux'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GoogleLoginPage from './GoogleLoginPage'
import App from './App'
import ProtectedRoute from '../Components/ProtectedRoute'

const store = createStore()

type Props = {

}

export default class Root extends Component<Props> {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Switch>
              <Route path='/login' component={GoogleLoginPage} />
              <ProtectedRoute path='/'>
                <App />
              </ProtectedRoute>
            </Switch>
          </Container>
        </Router>
      </Provider>
    )
  }
}
