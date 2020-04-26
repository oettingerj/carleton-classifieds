// @flow

import { Nav } from 'react-bootstrap'
import React, { Component } from 'react'
import './Styles/SideBar.css'
import { Link } from 'react-router-dom'

const pages = ['Clothing', 'Electronics', 'Books', 'Furniture', 'Homeware', 'Tools', 'Outdoor Gear', 'Toys', 'Miscellaneous']
pages.sort()

type Props = {

}

export default class SideBar extends Component<Props> {
  renderNavItems = () => {
    const items = []
    for (const page of pages) {
      items.push(
        <Nav.Item key={page}>
          <Nav.Link as={Link} to='#' href='#'>{page}</Nav.Link>
        </Nav.Item>
      )
    }
    return items
  }

  render () {
    return (
      <Nav className='flex-column' id='sidebar'>
        {this.renderNavItems()}
      </Nav>
    )
  }
}

/*
Card Design: https://react-bootstrap.github.io/components/cards/
Card Text: https://getbootstrap.com/docs/4.4/utilities/text/
Links: https://www.w3schools.com/html/html_links.asp
Styling Links: https://www.w3schools.com/react/react_css.asp
*/
