import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveListing: ['item']
})

export const ConfigTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  savedListings: [{
    id: 'x1',
    title: 'Saucepan',
    user: 'Josh Oettinger',
    img: 'https://www.ikea.com/us/en/images/products/oumbaerlig-saucepan-with-lid__0712841_PE729104_S5.JPG'
  }],
  listings: []
})

/* ------------- Reducers ------------- */

export const saveListing = (state, { item }) => state.merge({
  savedListings: state.savedListings.concat(item)
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_LISTING]: saveListing
})
