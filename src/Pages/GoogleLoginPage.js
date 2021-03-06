import GoogleLogin from 'react-google-login'
import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './Styles/Login.css'
import { connect } from 'react-redux'
import API, { GOOGLE_LOGIN_CLIENT_ID } from '../Services/API'
import Cookies from 'js-cookie'
import * as Startup from '../Services/Startup'
import UserActions from '../Redux/UserRedux'

type Props = {
  dispatch: ({}) => void,
  history: any
}
type State = {
  show: boolean
}

class GoogleLoginPage extends Component<Props, State> {
  api: any

  constructor (props: Props) {
    super(props)
    this.api = API()
    this.state = {
      show: false
    }
  }

  responsePass = (googleUser) => {
    const idToken = googleUser.getAuthResponse().id_token
    this.api.authenticate(idToken).then((response) => {
      if (response.ok) {
        Cookies.set('loggedIn', true)
        Cookies.set('csrfToken', response.data.csrfToken)
        this.props.dispatch(UserActions.setInfo(response.data.name, response.data.id, response.data.email))
        Startup.loadListings(this.props.dispatch)
        this.props.history.push('/')
      }
    }).catch((error) => console.warn(error))
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
              clientId={GOOGLE_LOGIN_CLIENT_ID}
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
How to set up Google Login references:
https://www.youtube.com/watch?v=5-jBzkttbx0&t=229s
*/
