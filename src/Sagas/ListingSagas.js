import API from '../Services/API'
import { omit } from 'ramda'

export function * createRideRequest ({ ride }) {
  const api = API()
  yield api.createRideListing(omit(['user', 'id'], ride))
}

export function * createItemRequest ({ listing }) {
  const api = API()
  yield api.createItemListing(omit(['user', 'id'], listing))
}
