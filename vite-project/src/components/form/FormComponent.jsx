import styles from './FormComponent.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherCity } from '../../api';
import { handleCityChange } from '../../utils/ValidationForm';
import { useState } from 'react';
import { setCityName, setCityWeather, setIsLoading } from '../../store/WeatherSlice';

const GetCityAtForm = () => {
   const dispatch = useDispatch();
   const [isCityError, setCityError] = useState([]);
   const cityName = useSelector((state) => state.weather.cityName);
   const isLoading = useSelector((state) => state.weather.isLoading);

   const searchHeandler = () => {
      if(!cityName) return;
      else{
         dispatch(setIsLoading(true));
         getWeatherCity(cityName).then(data => {
            const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
            console.log(dailyData);
            dispatch(setCityWeather(dailyData));
            dispatch(setIsLoading(false));
      }).catch(err => console.log(err))}
   }
   return(
      <form className={styles.form}>
         <h2 className={styles.form_header}>Выберите город</h2>
         <input className={styles.form_Input} type="text" name="city" placeholder="Город" value={cityName} 
            onChange={(event) => {
               handleCityChange(event, setCityError);
               dispatch(setCityName(event.target.value));
            }}/>
         <p className={styles.form_Input_errors}>{isCityError}</p>
         <button className={styles.form_Button} onClick={searchHeandler}disabled={isLoading}>{isLoading ? "Идёт поиск" : "Узнать погоду"}</button>
      </form>
   )
}
export default GetCityAtForm