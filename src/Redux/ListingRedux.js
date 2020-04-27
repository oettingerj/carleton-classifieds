import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import mockListings from '../Mock Data/Listing.json'
import mockRides from '../Mock Data/RideListing.json'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveListing: ['item'],
  createRideRequest: ['ride']
})

export const ConfigTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  listings: mockListings,
  rides: mockRides
})

/* ------------- Reducers ------------- */

export const saveListing = (state, { item }) => state.merge({
  savedListings: state.savedListings.concat(item)
})

export const createRideRequest = (state, { ride }) => state.merge({
  rides: state.rides.concat(ride)
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_LISTING]: saveListing,
  [Types.CREATE_RIDE_REQUEST]: createRideRequest
})
