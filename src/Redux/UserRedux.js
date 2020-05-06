import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setInfo: ['name', 'id', 'email'],
  setLoggedIn: ['isLoggedIn'],
  saveOwnListings: ['ownListings'],
  saveOwnRides: ['ownRides'],
  saveListings: ['saving_listing'],
  saveRides: ['saving_ride'],
  unsaveListings: ['id'],
  deleteOwnListings: ['id'],
  unsaveRides: ['id'],
  deleteOwnRides: ['id']
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
  savedRides:['5','6','7'],
  ownListings: [{
    id: 'user1',
    title: 'Saucepan',
    user: 'Josh Oettinger',
    img: 'https://www.ikea.com/us/en/images/products/oumbaerlig-saucepan-with-lid__0712841_PE729104_S5.JPG'
  }],
  ownRides: [{
    id: 'user1',
    startLocation: {
      name: 'MSP Airport'
    },
    endLocation: {
      name: 'Carleton College'
    },
  }],
})

/* ------------- Reducers ------------- */

export const setInfo = (state, { name, id, email }) => state.merge({ name, id, email })

export const setLoggedIn = (state, { isLoggedIn }) => state.merge({ isLoggedIn })

export const saveOwnListings = (state, { ownListings }) => state.merge({
  ownListings: state.ownListings.concat(ownListings)
})

export const saveOwnRides = (state, { ownRides }) => state.merge({
  ownRides: state.ownRides.concat(ownRides)
})

export const saveListings = (state, { saving_listing }) => state.merge({
  savedListings: state.savedListings.concat(saving_listing)
})

export const saveRides = (state, { saving_ride }) => state.merge({
  savedRides: state.savedRides.concat(saving_ride)
})

export const unsaveListings = (state, { id }) => state.merge({
  savedListings: state.savedListings.filter((listing => listing !== id))
})

export const deleteOwnListings = (state, { id }) => state.merge({
  ownListings: state.ownListings.filter((listing => listing.id !== id))
})

export const unsaveRides = (state, { id }) => state.merge({
  savedRides: state.savedRides.filter((listing => listing !== id))
})

export const deleteOwnRides = (state, { id }) => state.merge({
  ownRides: state.ownRides.filter((listing => listing.id !== id))
})


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_INFO]: setInfo,
  [Types.SET_LOGGED_IN]: setLoggedIn,
  [Types.SAVE_OWN_LISTINGS]: saveOwnListings,
  [Types.SAVE_OWN_RIDES]: saveOwnRides,
  [Types.SAVE_LISTINGS]: saveListings,
  [Types.SAVE_RIDES]: saveRides,
  [Types.UNSAVE_LISTINGS]: unsaveListings,
  [Types.DELETE_OWN_LISTINGS]: deleteOwnListings,
  [Types.UNSAVE_RIDES]: unsaveRides,
  [Types.DELETE_OWN_RIDES]: deleteOwnRides
})
