// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import Cookies from 'js-cookie'

// our "constructor"
export default () => {
  const api = apisauce.create({
    baseURL: 'http://127.0.0.1:8000/',
    // 15 second timeout
    timeout: 15000,
    withCredentials: true,
    headers: {
      'X-CSRFTOKEN': Cookies.get('csrfToken')
    }
  })

  const authenticate = (idToken) => api.post('tokensignin/', {
    idtoken: idToken
  })

  const logout = () => api.get('logout/')

  const getItemListings = () => api.get('api/get/available_postings//')

  const getItemListingsByCategory = (category) => api.get(`api/get/available_postings/${category}/`)

  const getRideListings = () => api.get('api/get/available_rides/')

  const createRideListing = (ride) => api.post('rideposting/create/', ride)

  const createItemListing = (listing) => api.post('itemposting/create/', listing)

  return {
    authenticate,
    logout,
    getItemListings,
    getRideListings,
    createRideListing,
    createItemListing,
    getItemListingsByCategory
  }
}

// ENTER YOUR KEYS BELOW
export const GOOGLE_API_KEY = ''
export const GOOGLE_LOGIN_CLIENT_ID = ''
