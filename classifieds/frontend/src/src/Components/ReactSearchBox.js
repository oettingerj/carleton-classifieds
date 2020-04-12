import React, { Component } from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'
export default class App extends Component {
  render() {
    return (
      <Form inline>
        <FormControl type='text' placeholder='Search' className="mr-sm-2"/>
        <Button variant='outline-primary'>Search</Button>
      </Form>
    )
  }
}

//Search box code from https://react-bootstrap.github.io/components/navbar/
