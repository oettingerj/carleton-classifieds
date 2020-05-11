import ListingActions from '../Redux/ListingRedux'
import API from '../Services/API'

const api = API()

export const loadListings = (dispatch) => {
  api.getItemListings().then((response) => {
    if (response.ok) {
      dispatch(ListingActions.setItemListings(response.data))
    }
  }).catch((error) => console.warn(error))
  api.getRideListings().then((response) => {
    if (response.ok) {
      dispatch(ListingActions.setRideListings(response.data))
    }
  }).catch((error) => console.warn(error))
}