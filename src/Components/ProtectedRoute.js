// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { omit } from 'ramda'

type Props = {
  children: Node[],
  isLoggedIn: boolean
}

class ProtectedRoute extends Component<Props> {
  renderRoute = (props) => {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { ...props })
    })
    if (this.props.isLoggedIn) {
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
      <Route {...omit(['children', 'isLoggedIn'], this.props)} render={this.renderRoute} />
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn
})

export default connect(mapStateToProps)(ProtectedRoute)
