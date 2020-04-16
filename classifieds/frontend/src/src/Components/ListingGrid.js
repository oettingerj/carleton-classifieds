// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

type Props = {
  children: Node[],
  listingsPerRow: number
}

export default class ListingGrid extends Component<Props> {
  renderGrid = () => {
    const grid = []
    let index = 0

    while (index < this.props.children.length) {
      grid.push(this.renderRow(this.props.children.slice(index, index + this.props.listingsPerRow)))
      index += this.props.listingsPerRow
    }

    return grid
  }

  renderRow = (children: Node[]) => {
    const cols = []

    for (const child of children) {
      cols.push(
        <Col>
          {child}
        </Col>
      )
    }

    return (
      <Row className='p-3'>
        {cols}
      </Row>
    )
  }

  render () {
    return (
      <Container>
        {this.renderGrid()}
      </Container>
    )
  }
}
