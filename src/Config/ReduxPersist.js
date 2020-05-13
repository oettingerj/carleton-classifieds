import storage from 'redux-persist/lib/storage'
import immutablePersistenceTransform from '../Services/ImmutablePersistenceTransform'

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '0.9',
  storeConfig: {
    key: 'primary',
    storage,
    // Reducer keys that you do NOT want stored to persistence here.
    blacklist: [],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers'
    // whitelist: [],
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
