import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import mockListings from '../Mock Data/Listings.js'
import mockRides from '../Mock Data/RideListings'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveListing: ['item']
})

export const ConfigTypes = Types
export default Creators

/* ------------- Initial State ------------- */

const shuffledListings = shuffle(mockListings.slice())

export const INITIAL_STATE = Immutable({
  savedListings: shuffledListings.slice(0, 12),
  listings: mockListings,
  rides: mockRides
})

/* ------------- Reducers ------------- */

export const saveListing = (state, { item }) => state.merge({
  savedListings: state.savedListings.concat(item)
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_LISTING]: saveListing
})

/**
 * Shuffles array in place.
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * @param {Array} a items An array containing the items.
 */
function shuffle (a) {
  var j, x, i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}
