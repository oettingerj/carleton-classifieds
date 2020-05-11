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
      grid.push(this.renderRow(this.props.children.slice(index, index + this.props.listingsPerRow), index))
      index += this.props.listingsPerRow
    }

    return grid
  }

  renderRow = (children: Node[], rowIndex: number) => {
    const cols = []

    for (const child of children) {
      cols.push(
        <Col md={3} key={child.key}>
          {child}
        </Col>
      )
    }

    return (
      <Row key={rowIndex} className='p-3'>
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
