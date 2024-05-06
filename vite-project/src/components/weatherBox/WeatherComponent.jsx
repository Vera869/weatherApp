import { useSelector } from 'react-redux';
import styles from './WeatherComponent.module.css';

function WeatherBox() {
   const cityName = useSelector((state) => state.weather.cityName);
   const dailyData = useSelector((state) => state.weather.cityWeather);
  return (
    <div className={styles.weather}>
      <h3 className={styles.weather_header}> {cityName} прогноз на сегодня и ближайшие 5 дней</h3>
      <ul className={styles.weather_content}>
         {dailyData.map((weather, index) => {
            const iconcode = weather.weather[0].icon;
            const imgURL = "http://openweathermap.org/img/w/" + iconcode + ".png";
            const day = (weather.dt_txt).slice(8, 11) ;
            const month = (weather.dt_txt).slice(5, 7) ;
            const date = day +"."+ month;
            const ms = weather.dt * 1000;
            const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});
            return( <li className={styles.content_item} key={index}>
                  <p className={styles.item_header}>{weekdayName}</p>
                  <p className={styles.item_header}>{date}</p>
                  <img src={imgURL} className={styles.item_img}/>
                  <p className={styles.item_header}>Температура</p>
                  <p className={styles.item_data}>{Math.round(weather.main.temp)}&deg;C</p>
                  <p className={styles.item_header}>Скорость ветра</p>
                  <p className={styles.item_data}>{(weather.wind.speed).toFixed(1)} м/с</p>
                  <p className={styles.item_header}>Влажность</p>
                  <p className={styles.item_data}>{weather.main.humidity}%</p>
                  </li>
               )
            }) 
         }
      </ul>
    </div>
  )
}

export default WeatherBox
