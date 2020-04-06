// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExampleActions from '../Redux/ExampleRedux';

type Props = {

}

class Example extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  reduxExample() {
    this.props.dispatch(ExampleActions.setStarted(true));
  }

  render() {
    return (
      <div />
    );
  }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(Example);
