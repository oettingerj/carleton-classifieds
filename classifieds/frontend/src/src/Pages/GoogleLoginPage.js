
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

const responseGoogle = (response) => {
  console.log(response);
}

export default function App() {
  return (
    <GoogleLogin
      clientId="118120065426-b4m3d8qog18tvtct6p5atkg0249dmds5.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      />
  );
}
