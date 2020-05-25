# Carleton Classifieds Frontend

This repository contains the code for the React site that serves as the 
frontend for Carleton Classifieds.

### Setting up your development environment

First, clone this repository to your machine using `git clone`.
Then, run `npm install` to install the dependencies outlined in `package.json`.

To run the site in development mode, run `npm run dev` from the command line.
This will serve the site and reload whenever you make changes to a file.
To run the site in production, run `npm run build` then `npm start`.

## Libraries we're using

First and foremost, our site is powered by React. It's a javascript framework for
building websites. You should start by reading [this tutorial](https://reactjs.org/tutorial/tutorial.html).

We're using Redux for global state management. You should read [this](https://redux.js.org/introduction/getting-started)
to familiarize yourself with the library.

We use React-Router for routing. The site is a single-page application, which means it
doesn't reload when navigating to a new page. Instead, react-router handles this.
[Read this to learn more](https://reacttraining.com/react-router/web/guides/quick-start).

We write our React components using Flow, a javascript extension that adds type-checking.
Learn more [here](https://flow.org/en/docs/getting-started/). You can add support for Flow
in your IDE of choice.

Much of our frontend uses components from the [react-bootstrap](https://react-bootstrap.github.io)
library. Specifically, we also make use of the navigation bar, modal, form and card components.

## Project breakdown

The following sections correspond to folders within the `src` directory, and will go
into detail on the structure/operation of the site.

### Components
The Components folder contains react components that are smaller than a full page.
These are often reused in multiple places, or are smaller parts of a larger component.

Here's an example of a component:

```js
// @flow
// ^tells flow to check this file

import React, { Component } from 'react'
import './Styles/Example.css'

// Define the expected props and their types
type Props = {
  stringVariable: string
}
// Define the variables within the component's state and their types
// This is optional and can be omitted if the component has no state
type State = {
  boolVariable: boolean
}

export default class Example extends Component<Props, State> {
  // Initialize component and state
  constructor (props: Props) {
    super(props)
    this.state = {
      boolVariable: false
    }   
  }

  render () {
    // The render function can return html elements or React components
    return (
      <div>
        Hello World!
      </div>
    )
  }
}
```

Styles for a component should be stored in the Styles folder, which contains
css files.

### Config

The Config folder contains two files:

#### `ReduxPersist.js`

This contains configuration details which apply to the persistence of the Redux store
between browser sessions. When you make a significant change to Redux such as adding a
file or changing the initial state, you'll want to increment the `reducerVersion`,
telling Redux to replace the currently saved version with the new one. If there are
Redux files you don't want persisted, you can add their names to `blacklist`.

#### `Types.js`

This contains a bunch of Flow types relevant to the project. These types are imported
and used in various React components.

### Pages

This folder contains React components that serve as entire pages in the site.
The top-level component is `Root.js`, which wraps the entire app in the necessary
components to make Redux and react-router function.

Many of the components in this folder are connected to Redux. Here's an example
of how that's done (from the bottom of `Home.js`):

```js
const mapStateToProps = (state) => ({
  /*
    Here you can pass redux objects to the props of your component.
    state.listings.listings will now be available within the component
    at this.props.listings
  */
  listings: state.listings.listings
})

/*
  Instead of exporting the Home component at the top of the file where it 
  is defined, we export the connected component here.
*/
export default connect(mapStateToProps)(Home)
```

### Redux

This folder contains all of the Redux files. In `index.js`, all these files are
combined into a single reducer used by the site. The actual persistence of the
store happens here, too. `CreateStore.js` is called by `Root.js` to initialize the
store whenever the site is loaded.

Within a Redux file, we define actions and reducers. You can look at the existing
files for a better understanding of what this looks like. For reference, we
use the `reduxsauce` library, and you can check out the documentation [here](https://github.com/jkeam/reduxsauce).

### Sagas

Sagas are functions that are run automatically when certain Redux actions are dispatched.
Take a look at the [redux-saga](https://redux-saga.js.org) library for more information.

### Services

This folder contains utility files used throughout the site. `ImmutablePersistenceTransform.js`
and `Rehydration.js` shouldn't change and you don't need to worry about them. They handle
stuff related to Redux persistence.

`Startup.js` contains code run from `StartupSagas.js` which initializes the site on every
reload.

`API.js` contains all of the functions we use to integrate with our backend. Using the
[apisauce](https://github.com/infinitered/apisauce) library, we define all of our endpoints
here, and export a constructor for an object with all the functions in the file.

## Other concepts

### Authentication

We use Google's login API to authenticate users. This API produces an idToken, which
we use to authenticate with our backend. When we authenticate, the backend sends back
a request that automatically sets cookies in the browser; these cookies are then sent with
each successive request to the API. When making POST requests, we also pass a token in
the headers of the request. This API requires a token; the one currently in the repo
may no longer work. [This documentation](https://developers.google.com/identity/sign-in/web/sign-in)
should show you how to generate one.

When a user logs in, we store a cookie called `loggedIn` which stores whether the user
is logged in. This cookie is removed on logout. We have a component called
`ProtectedRoute`, which is an extension of the `Route` component from react-router.
`ProtectedRoute` renders a page only if the user is logged in (determined by the presence
of the aforementioned cookie). Otherwise, it redirects to the login page.

### Google Maps

We use the Google Maps API to preview rides and provide autocomplete functionality on
the Create Ride page. As with login, you'll need a token, but not the same token as
the one for login. [Read more](https://developers.google.com/maps/documentation/javascript/get-api-key)
on how to generate one.
