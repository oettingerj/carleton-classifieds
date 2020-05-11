import ListingActions from '../Redux/ListingRedux'
import API from '../Services/API'
import Cookies from 'js-cookie'

// runs on startup
export function * startup ({ store }) {
  const state = store.getState()
  if (Cookies.get('loggedIn')) {
    const api = API()
    yield api.getItemListings().then((response) => {
      if (response.ok) {
        store.dispatch(ListingActions.setItemListings(response.data))
      }
    }).catch((error) => console.warn(error))
  }
}
