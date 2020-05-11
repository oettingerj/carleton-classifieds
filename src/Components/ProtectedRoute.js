// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { omit } from 'ramda'
import Cookies from 'js-cookie'

type Props = {
  children: Node[]
}

export default class ProtectedRoute extends Component<Props> {
  loggedIn: boolean

  constructor (props: Props) {
    super(props)
    this.loggedIn = Cookies.get('loggedIn')
  }

  renderRoute = (props: any) => {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { ...props })
    })

    if (this.loggedIn) {
      return children
    } else {
      return (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}
        />
      )
    }
  }

  render () {
    return (
      <Route {...omit(['children'], this.props)} render={this.renderRoute} />
    )
  }
}
