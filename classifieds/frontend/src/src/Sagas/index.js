import { takeLatest, all } from 'redux-saga/effects';

/* ------------- Types ------------- */

import { ConfigTypes } from '../Redux/ExampleRedux';

/* ------------- Sagas ------------- */

import { setGettingRecents } from './ExampleSagas';

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(ConfigTypes.SET_GETTING_RECENTS, setGettingRecents),
  ]);
}
