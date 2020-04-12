// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExampleActions from '../Redux/ExampleRedux'

type Props = {
  started: boolean,
  dispatch: ({}) => void
}

class Example extends Component<Props> {
  reduxExample () {
    this.props.dispatch(ExampleActions.setStarted(true))
  }

  render () {
    return (
      <div />
    )
  }
}

const mapStateToProps = (state) => ({
  started: state.example.started
})

export default connect(mapStateToProps)(Example)
