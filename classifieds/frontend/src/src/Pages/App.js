// @flow

import React from 'react'
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Listing from '../Components/Listing'

import { Provider } from 'react-redux'
import createStore from '../Redux'
import { Container } from 'react-bootstrap'

const store = createStore()

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <body>
          <Container className='pt-4'>
            <Listing img='https://designshack.net/wp-content/uploads/placeholder-image.png' title='Listing' user='Jane Doe' style={{ width: 200 }} />
          </Container>
        </body>
      </div>
    </Provider>
  )
}

export default App
