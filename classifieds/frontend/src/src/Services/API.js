// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
export default () => {
  const api = apisauce.create({
    baseURL: 'http://127.0.0.1:8000/',
    // 15 second timeout
    timeout: 15000
  })

  const getPosts = (limit, offset) => () => api.get('feed/items', {
    limit: limit,
    offset: offset
  })

  return {
    getPosts
  }
}
