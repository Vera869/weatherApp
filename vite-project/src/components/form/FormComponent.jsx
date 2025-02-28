import s from "./FormComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherCity } from "../../api";
import { handleCityChange } from "../../utils/ValidationForm";
import { useState } from "react";
import {
  setApiError,
  setCityName,
  setCityWeather,
  setIsLoading,
  setTitleCity,
  setTodayWeather,
} from "../../store/WeatherSlice";

const FormToCity = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.weather.changeTheme);
  const [isCityError, setCityError] = useState([]);
  const cityName = useSelector((state) => state.weather.cityName);
  const isLoading = useSelector((state) => state.weather.isLoading);
  const isApiError = useSelector((state) => state.weather.apiError);

  const searchHeandler = (event) => {
    // делает завпрос в апи  и отправляет ответ в стор
    event.preventDefault();
    if (!cityName || cityName.length < 3) return;
    else {
      dispatch(setIsLoading(true));
      dispatch(setApiError(""));
      dispatch(setCityWeather([]));
      dispatch(setTodayWeather([]));
      dispatch(setTitleCity(cityName));

      getWeatherCity(cityName)
        .then((data) => {
          setCityError([]);
          const date = new Date().toISOString().slice(0, 10);
          const dailyData = data.list
            .filter(
              (reading) =>
                reading.dt_txt.includes("12:00:00") &&
                !reading.dt_txt.includes(date)
            )
            .slice(0, 4);
          const todayData = data.list.filter((reading) =>
            reading.dt_txt.includes(date)
          );
          // console.log(todayData);
          dispatch(setTodayWeather(todayData));
          dispatch(setCityWeather(dailyData));
          dispatch(setIsLoading(false));
        })
        .catch((error) => {
          dispatch(setIsLoading(false));
          dispatch(setApiError(error.message));
        });
    }
  };
  return (
    <form className={s.container}>
      <div className={s.inputBox}>
        <input
          className={theme ? s.Input : `${s.Input} ${s.Input_dark}`}
          type="text"
          name="city"
          placeholder="Город"
          value={cityName}
          onChange={(event) => {
            handleCityChange(event, setCityError);
            dispatch(setCityName(event.target.value));
          }}
        />
        {isCityError ? (
          <p
            className={
              theme
                ? s.Input_errors
                : `${s.Input_errors} ${s.Input_dark_errors}`
            }
          >
            {isCityError}
          </p>
        ) : (
          ""
        )}
      </div>

      <div className={s.btnBox}>
        <button
          className={s.Button}
          onClick={searchHeandler}
          disabled={isLoading}
        >
          {isLoading ? "Идёт поиск" : "Узнать погоду"}
        </button>
        {isApiError ? (
          <p
            className={
              theme
                ? s.Input_errors
                : `${s.Input_errors} ${s.Input_dark_errors}`
            }
          >
            {isApiError}
          </p>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};
export default FormToCity;
