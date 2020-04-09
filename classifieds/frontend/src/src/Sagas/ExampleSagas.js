import { put, delay } from 'redux-saga/effects'
import ExampleActions from '../Redux/ExampleRedux'

export function * setGettingRecents ({ getting }) {
  if (getting) {
    yield delay(10000)
    yield put(ExampleActions.setGettingRecents(false))
  }
}
