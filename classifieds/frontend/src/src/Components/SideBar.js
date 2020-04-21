// @flow

import { Nav } from 'react-bootstrap'
import React, { Component } from 'react'
import './Styles/SideBar.css'

const pages = ['Clothing', 'Electronics', 'Books', 'Furniture', 'Homeware', 'Tools', 'Outdoor Gear', 'Toys', 'Miscellaneous', 'Tigers']
pages.sort()

type Props = {

}

export default class SideBar extends Component<Props> {
  buildNavItem = (title: string, url: string) => {
    return (
      <Nav.Item key={title} className='sidebarItem'>
        <Nav.Link href={url}>{title}</Nav.Link>
      </Nav.Item>
    )
  }

  renderNavItems = () => {
    const items = []
    for (const page of pages) {
      items.push(this.buildNavItem(page, '#'))
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
