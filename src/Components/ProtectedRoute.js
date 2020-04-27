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
  renderRoute = ({ location }) => {
    console.log(this.props.isLoggedIn)
    if (this.props.isLoggedIn) {
      return this.props.children
    } else {
      return (
        <Redirect to={{
          pathname: '/login',
          state: { from: location }
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
