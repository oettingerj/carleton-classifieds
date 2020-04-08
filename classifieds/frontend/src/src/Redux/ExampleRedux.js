import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setStarted: ['started'],
  setRefreshing: ['refreshing'],
  setGettingRecents: ['getting'],
});

export const ConfigTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  started: false,
  refreshing: false,
  gettingRecents: false,
});

/* ------------- Reducers ------------- */

export const setStarted = (state, { started }) => state.merge({ started });

export const setRefreshing = (state, { refreshing }) => state.merge({ refreshing });

export const setGettingRecents = (state, { getting }) => state.merge({ gettingRecents: getting });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_STARTED]: setStarted,
  [Types.SET_REFRESHING]: setRefreshing,
  [Types.SET_GETTING_RECENTS]: setGettingRecents,
});
