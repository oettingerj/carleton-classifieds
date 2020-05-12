import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { ListingTypes } from '../Redux/ListingRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { createRideRequest } from './ListingSagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(ListingTypes.CREATE_RIDE_REQUEST, createRideRequest)
  ])
}
