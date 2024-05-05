import { createSlice } from '@reduxjs/toolkit'

const citySlice = createSlice({
  name: 'city',
  initialState: {
    cityName: "",
    isLoading: false,
    cityWeather: [],
  },
  reducers: {
    setCityName(state, action) {
      state.cityName = action.payload
      console.log(state.cityName);
    },
    setCityWeather(state, action) {
      state.cityWeather = action.payload
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
  },
})
export const cityReducer = citySlice.reducer
export const { setCityName, setIsLoading, setCityWeather } = citySlice.actions;