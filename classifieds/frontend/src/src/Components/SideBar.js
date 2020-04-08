import { Card } from 'react-bootstrap'
import React, { Component } from 'react'

export default class SideBar extends Component {
  render() {
    return (
      <div class="d-flex align-items-start">
      <Card bg='light' text='white' style={{ height: '38rem', width: '9rem' }}>
        <div class="text-left p-2 bd-highlight">
          <a style={{color: "black"}} href="url">Clothing</a>
        </div>
        <div class="text-left p-2 bd-highlight">
          <a style={{color: "black"}} href="url">Rides</a>
        </div>
        <div class="text-left p-2 bd-highlight">
          <a style={{color: "black"}} href="url">Electronics</a>
        </div>
        <div class="text-left p-2 bd-highlight">
          <a style={{color: "black"}} href="url">Furniture</a>
        </div>
        <div class="text-left p-2 bd-highlight">
          <a style={{color: "black"}} href="url">Homeware</a>
        </div>
        <div class="text-left p-2 bd-highlight">
          <a style={{color: "black"}} href="url">Tools</a>
        </div>
        <div class="text-left p-2 bd-highlight">
          <a style={{color: "black"}} href="url">Outdoor Gear</a>
        </div>
        <div class="text-left p-2 bd-highlight">
          <a style={{color: "black"}} href="url">Books</a>
        </div>
        <div class="text-left p-2 bd-highlight">
          <a style={{color: "black"}} href="url">Toys</a>
        </div>
        <div class="text-left p-2 bd-highlight">
          <a style={{color: "black"}} href="url">Rides</a>
        </div>
        <div class="text-left p-2 bd-highlight">
          <a style={{color: "black"}} href="url">Miscellaneous</a>
        </div>
      </Card>
      </div>
    )
  }
}

/*
Card Design: https://react-bootstrap.github.io/components/cards/
Card Text: https://getbootstrap.com/docs/4.4/utilities/text/
Links: https://www.w3schools.com/html/html_links.asp
Styling Links: https://www.w3schools.com/react/react_css.asp
*/
