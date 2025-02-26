import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    cityName: "",
    titleCity:"",
    isLoading: false,
    cityWeather: [],
    apiError: "",
    changeTheme: true,
  },
  reducers: {
    setCityName(state, action) {
      state.cityName = action.payload;
    },
    setTitleCity(state, action) {
      state.titleCity = action.payload;
    },
    setCityWeather(state, action) {
      state.cityWeather= action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setApiError(state, action) {
      state.apiError = action.payload;
    },
    setChangeTheme(state) {
      state.changeTheme = !state.changeTheme;
    },
  },
});
export const weatherReducer = weatherSlice.reducer;
export const { setCityName, setTitleCity, setIsLoading, setCityWeather, setApiError, setChangeTheme } = weatherSlice.actions;