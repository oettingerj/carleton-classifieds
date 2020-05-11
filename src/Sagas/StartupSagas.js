import Cookies from 'js-cookie'
import * as Startup from '../Services/Startup'

// runs on startup
export function * startup ({ store }) {
  if (Cookies.get('loggedIn')) {
    yield Startup.loadListings(store.dispatch)
  }
}
