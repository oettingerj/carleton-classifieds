import ListingActions from '../Redux/ListingRedux'
import API from '../Services/API'

// runs on startup
export function * startup ({ store }) {
  const state = store.getState()
  if (state.user.isLoggedIn) {
    const api = API()
    yield api.getItemListings().then((response) => {
      store.dispatch(ListingActions.setItemListings(response.data))
    })
  }
}
