import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveListing: ['item'],
  createRideRequest: ['ride'],
  createItemRequest: ['listing'],
  deleteListings: ['id'],
  deleteRides: ['id'],
  liked: ['id'],
  unliked: ['id'],
  likedRides: ['id'],
  unlikedRides: ['id'],
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

export const createItemRequest = (state, { listing }) => state.merge({
  listings: state.listings.concat(listing)
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

export const likedRides = (state, { id }) => state.merge({
  rides: state.rides.map((ride) => {
    if (ride.id === id){
      return {
        ...ride,
        sold: true
      }
    }
    return ride
  })
})

export const unlikedRides = (state, { id }) => state.merge({
  rides: state.rides.map((ride) => {
    if (ride.id === id){
      return {
        ...ride,
        sold: false
      }
    }
    return ride
  })
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_LISTING]: saveListing,
  [Types.CREATE_RIDE_REQUEST]: createRideRequest,
  [Types.CREATE_ITEM_REQUEST]: createItemRequest,
  [Types.DELETE_LISTINGS]: deleteListings,
  [Types.DELETE_RIDES]: deleteRides,
  [Types.LIKED]: liked,
  [Types.UNLIKED]: unliked,
  [Types.LIKED_RIDES]: likedRides,
  [Types.UNLIKED_RIDES]: unlikedRides,
  [Types.SET_ITEM_LISTINGS]: setItemListings,
  [Types.SET_RIDE_LISTINGS]: setRideListings

})
