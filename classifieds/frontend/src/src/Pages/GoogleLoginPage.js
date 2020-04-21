
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { Row, Col, Card, Container, Form} from 'react-bootstrap'
import {withRouter, Router, Route} from 'react-router'
import Home from './Home'

const responsePass = (response) => {
  this.props.history.push('/create_listing')
}

class GoogleLoginPage extends Component<Props>{
  render(){
    return (
      <Row className='justify-content-md-center'>
        <Col md={5}>
          <Card style={{ width: '20rem'}}>
            <Card.Title>Welcome to Carleton Classifieds!</Card.Title>
              <GoogleLogin
              clientId="118120065426-b4m3d8qog18tvtct6p5atkg0249dmds5.apps.googleusercontent.com"
              buttonText="Login to Continue"
              onSuccess={responsePass}
              onFailure={responsePass}
              cookiePolicy={'single_host_origin'}
              />
              <Router history={this.props.history}>
                <Route path="/home" component={Home} />
              </Router>
          </Card>
        </Col>
    </Row>
    );
  }
}

export default withRouter(GoogleLoginPage)
