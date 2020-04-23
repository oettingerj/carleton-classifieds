import GoogleLogin from 'react-google-login';
import React, { Component } from 'react'
import {Card, Modal, Button} from 'react-bootstrap'
import '../Components/Styles/Login.css'

type Props = {
  show:False
}

class GoogleLoginPage extends Component<Props>{

  responsePass = (response) => {
    this.props.history.push('/AllPages')
  }

  modalClose = () => {
    this.show = false
  }
  modalOpen = () =>{
    console.log("hello")
    this.show = true
  }

  render(){
    return (
        <body class="login-background">
          <div class="centered">
             <h2> Carleton Classifieds </h2>
             <Card style={{width: '18rem'}}>
               <GoogleLogin
               clientId="118120065426-b4m3d8qog18tvtct6p5atkg0249dmds5.apps.googleusercontent.com"
               buttonText="Sign in with Google"
               onSuccess={this.responsePass}
               onFailure={this.modalOpen}
               cookiePolicy={'single_host_origin'}
               style={{theme:'dark'}}
               />
             </Card>
             <Modal show={this.show} onHide={this.modalClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
              <Button variant="secondary" onClick={this.modalClose}>
                Close
              </Button>
              </Modal.Footer>
              </Modal>
           </div>
        </body>
    );
  }
}

export default GoogleLoginPage

/*
Google Log in: https://www.npmjs.com/package/react-google-login

*/
