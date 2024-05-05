//import { useState } from 'react';
import styles from './FormComponent.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { setCityName, setCityWeather, setIsLoading } from '../../store/CitySlice';
import { getWeatherCity } from '../../api';

const GetCityAtForm = () => {
   const dispatch = useDispatch();
  // const [isLoginError, setLoginError] = useState([]);
   const cityName = useSelector((state) => state.city.cityName);
   const isLoading = useSelector((state) => state.city.isLoading);
   const searchHeandler = () => {
      if(!cityName) return;
      else{
         dispatch(setIsLoading(true));
         getWeatherCity(cityName).then(data => {
         console.log(data.weather);
         dispatch(setCityWeather(data));
         // dispatch(set(data.items));
         dispatch(setIsLoading(false));
      }).catch(err => console.log(err))}
   }
   return(
      <form className={styles.form}>
         <h2 className={styles.form_header}>Выберите город</h2>
         <input className={styles.form_Input} type="text" name="city" placeholder="Город" value={cityName} 
               onChange={(event) => {
                  // handleLoginChange(event, setLoginError);
                  dispatch(setCityName(event.target.value));
                  }}/>
         <button className={styles.form_Button} onClick={searchHeandler}disabled={isLoading}>{isLoading ? "Идёт поиск" : "Узнать погоду"}</button>
      </form>
   )
}
export default GetCityAtForm