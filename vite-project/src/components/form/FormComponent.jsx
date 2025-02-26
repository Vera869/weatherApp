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
} from "../../store/WeatherSlice";

const GetCityAtForm = () => {
  const dispatch = useDispatch();
  const [isCityError, setCityError] = useState([]);
  const cityName = useSelector((state) => state.weather.cityName);
  const isLoading = useSelector((state) => state.weather.isLoading);
  const isApiError = useSelector((state) => state.weather.apiError);

  const searchHeandler = (event) => {
    // делает завпрос в апи  и отправляет ответ в стор через диспатч
    event.preventDefault();
    if (!cityName) return;
    else {
      dispatch(setIsLoading(true));
      dispatch(setApiError(""));
      dispatch(setCityWeather([]));

      getWeatherCity(cityName)
        .then((data) => {
          setCityError([]);
          const dailyData = data.list.filter((reading) =>
            reading.dt_txt.includes("12:00:00")
          );
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
          className={s.Input}
          type="text"
          name="city"
          placeholder="Город"
          value={cityName}
          onChange={(event) => {
            handleCityChange(event, setCityError);
            dispatch(setCityName(event.target.value));
          }}
        />
        {isCityError ? <p className={s.Input_errors}>{isCityError}</p> : ""}
      </div>

      <div className={s.btnBox}>
        <button
          className={s.Button}
          onClick={searchHeandler}
          disabled={isLoading}
        >
          {isLoading ? "Идёт поиск" : "Узнать погоду"}
        </button>
        {isApiError ? <p className={s.Input_errors}>{isApiError}</p> : ""}
      </div>
    </form>
  );
};
export default GetCityAtForm;
