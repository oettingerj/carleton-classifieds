import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveListing: ['item'],
  createRideRequest: ['ride'],
  deleteListings: ['id'],
  deleteRides: ['id'],
  liked: ['id'],
  setItemListings: ['listings'],
  setRideListings: ['rides']
})

export const ListingTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  listings: [],
  rides: []
})

/* ------------- Reducers ------------- */

export const saveListing = (state, { item }) => state.merge({
  listings: state.listings.concat(item)
})

export const setItemListings = (state, { listings }) => state.merge({ listings })

export const setRideListings = (state, { rides }) => state.merge({ rides })

export const createRideRequest = (state, { ride }) => state.merge({
  rides: state.rides.concat(ride)
})

export const deleteListings = (state, { id }) => state.merge({
  listings: state.listings.filter(listing => listing.id !== id)
})

export const deleteRides = (state, { id }) => state.merge({
  rides: state.rides.filter(ride => ride.id !== id)
})

export const liked = (state, { id }) => state.merge({
  listings: state.listings.map((listing) => {
    if (listing.id === id){
      return {
        ...listing,
        sold: true
      }
    }
    return listing
  })
})

export const unliked = (state, { id }) => state.merge({
  listings: state.listings.map((listing) => {
    if (listing.id === id){
      return {
        ...listing,
        sold: false
      }
    }
    return listing
  })
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_LISTING]: saveListing,
  [Types.CREATE_RIDE_REQUEST]: createRideRequest,
  [Types.DELETE_LISTINGS]: deleteListings,
  [Types.DELETE_RIDES]: deleteRides,
  [Types.LIKED]: liked,
  [Types.UNLIKED]: unliked,
  [Types.SET_ITEM_LISTINGS]: setItemListings,
  [Types.SET_RIDE_LISTINGS]: setRideListings

})
