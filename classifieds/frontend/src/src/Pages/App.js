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
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const store = createStore()
const responseGoogle = (response) => {
  console.log(response);
}

function App () {
  return (
    <GoogleLogin
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
  />
  )
}

ReactDOM.render(
  <App/>
  ,document.getElementById('root')
);

export default App
