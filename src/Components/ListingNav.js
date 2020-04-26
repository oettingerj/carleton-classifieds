// @flow

import { Breadcrumb, Nav, Form, FormControl, Button, Container } from 'react-bootstrap'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

type Props = {}

export default class NavigationBar extends Component<Props> {
  render () {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
