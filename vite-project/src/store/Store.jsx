import { configureStore } from '@reduxjs/toolkit'
import { cityReducer } from './CitySlice'

export const store = configureStore({
  reducer: {
    city: cityReducer,
  },
})