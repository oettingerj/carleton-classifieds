import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setInfo: ['name', 'id', 'email'],
  setLoggedIn: ['isLoggedIn'],
  saveOwnListings: ['save_listing'],
  saveOwnRides: ['save_ride'],
  saveListings: ['saving_listing'],
  saveRides: ['saving_ride']
})

export const ConfigTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  name: 'Josh Oettinger',
  id: 'user1',
  email: 'oettingerj@carleton.edu',
  isLoggedIn: true,
  savedListings: ['1', '5', '7'],
  savedRides:[],
  ownRides: [{
    id: 'user1',
    startLocation:{name : "MSP Airport"},
    endLocation: {name: "Carleton College"}
  }],
  ownListings: [{
    id: 'user1',
    title: 'Saucepan',
    user: 'Josh Oettinger',
    img: 'https://www.ikea.com/us/en/images/products/oumbaerlig-saucepan-with-lid__0712841_PE729104_S5.JPG'
  }],
})

/* ------------- Reducers ------------- */

export const setInfo = (state, { name, id, email }) => state.merge({ name, id, email })

export const setLoggedIn = (state, { isLoggedIn }) => state.merge({ isLoggedIn })

export const saveOwnListings = (state, { save_listing }) => state.merge({
  ownListings: state.ownListings.concat(save_listing)
})

export const saveOwnRides = (state, { save_ride }) => state.merge({
  ownRides: state.ownRides.concat(save_ride)
})

export const saveListings = (state, { saving_listing }) => state.merge({
  savedListings: state.savedListings.concat(saving_listing)
})

export const saveRides = (state, { saving_ride }) => state.merge({
  savedRides: state.savedRides.concat(saving_ride)
})


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_INFO]: setInfo,
  [Types.SET_LOGGED_IN]: setLoggedIn,
  [Types.SAVE_OWN_LISTINGS]: saveOwnListings,
  [Types.SAVE_OWN_RIDES]: saveOwnRides,
  [Types.SAVE_LISTINGS]: saveListings,
  [Types.SAVE_RIDES]: saveRides
})
