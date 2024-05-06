import { createSlice } from '@reduxjs/toolkit'

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    cityName: "",
    isLoading: false,
    cityWeather: [],
  },
  reducers: {
    setCityName(state, action) {
      state.cityName = action.payload
    },
    setCityWeather(state, action) {
      state.cityWeather= action.payload
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
    setWeekDay(state, action) {
      state.cityName = action.payload
    },
  },
})
export const weatherReducer = weatherSlice.reducer
export const { setCityName, setIsLoading, setCityWeather } = weatherSlice.actions;