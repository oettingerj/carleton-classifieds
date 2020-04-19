
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import React, { Component } from 'react'


const responseGoogle = (response) => {
  console.log(response);
}

export default class GoogleLoginPage extends Component<Props> {
  render(){
    return(
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
  );
}
}


/*
export default class GoogleLoginPage extends Component<Props> {
  render(){
    return(
      <div>
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      </div>
    )

  }
}
*/
