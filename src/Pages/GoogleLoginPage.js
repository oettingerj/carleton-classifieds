import GoogleLogin from 'react-google-login'
import React, { Component } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import './Styles/Login.css'
import { connect } from 'react-redux'
import UserActions from '../Redux/UserRedux'

type Props = {
  dispatch: ({}) => void
}
type State = {
  show: boolean
}

class GoogleLoginPage extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      show: false
    }
  }

  responsePass = (response) => {
    this.props.dispatch(UserActions.setLoggedIn(true))
    this.props.history.push('/')
  }

  modalClose = () => {
    this.setState({ show: false })
  }

  modalOpen = () => {
    this.setState({ show: true })
  }

  render () {
    return (
      <div className='login-background'>
        <div className='centered'>
          <h2> Carleton Classifieds </h2>
          <Card style={{ width: '18rem' }}>
            <GoogleLogin
              clientId='118120065426-b4m3d8qog18tvtct6p5atkg0249dmds5.apps.googleusercontent.com'
              buttonText='Sign in with Google'
              onSuccess={this.responsePass}
              onFailure={this.modalOpen}
              cookiePolicy='single_host_origin'
              style={{ theme: 'dark' }}
            />
          </Card>
        </div>
      </div>
    )
  }
}

export default connect()(GoogleLoginPage)

/*
Google Log in: https://www.npmjs.com/package/react-google-login

*/
