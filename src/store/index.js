/* 
import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './contact'
// Ga perlu combine reducer karena configureReducer
// akan melakukannya
// PS: kecuali reducernya nested > 1 level
// Harus kita combine
const store = configureStore({
  reducer: {
    contact: contactReducer
  }
})
export default store */
// Baris 43 untuk menghubungkan supaya ke simpan di store berkaitan dengan baris 18

import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

import contactReducer from './contact'

const rootReducer = combineReducers({ contact: contactReducer })
//isi contact reducer contact.js
const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

let persistor = persistStore(store)

export { persistor, store }