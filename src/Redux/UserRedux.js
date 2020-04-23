import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setInfo: ['name', 'id', 'email']
})

export const ConfigTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  name: 'Josh Oettinger',
  id: 'user1',
  email: 'oettingerj@carleton.edu',
  listings: [{
    id: 'user1',
    title: 'Saucepan',
    user: 'Josh Oettinger',
    img: 'https://www.ikea.com/us/en/images/products/oumbaerlig-saucepan-with-lid__0712841_PE729104_S5.JPG'
  }]
})

/* ------------- Reducers ------------- */

export const setInfo = (state, { name, id, email }) => state.merge({ name, id, email })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_INFO]: setInfo
})
