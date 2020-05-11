// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
export default () => {
  const api = apisauce.create({
    baseURL: 'http://127.0.0.1:8000/',
    // 15 second timeout
    timeout: 15000,
    withCredentials: true
  })

  const authenticate = (idToken) => api.post('tokensignin/', {
    idtoken: idToken
  })

  const logout = () => api.get('logout/')

  const getItemListings = () => api.get('api/get/available_postings//')

  const getRideListings = () => api.get('api/get/available_rides/')

  return {
    authenticate,
    logout,
    getItemListings,
    getRideListings
  }
}

export const GOOGLE_API_KEY = 'AIzaSyDQxf6bbw9DxeYDg40WN8PbDeQ-oF9SYiw'
export const GOOGLE_LOGIN_CLIENT_ID = '578173933063-2bldsbnkidcvoiq20eqeasv7u6u1fog3.apps.googleusercontent.com'
