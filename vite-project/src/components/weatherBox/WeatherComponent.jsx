import { useSelector } from "react-redux";
import s from "./WeatherComponent.module.css";

const WeatherBox = () => {
  const cityName = useSelector((state) => state.weather.cityName);
  const dailyData = useSelector((state) => state.weather.cityWeather);
  const isApiError = useSelector((state) => state.weather.apiError);
  const theme = useSelector((state) => state.weather.changeTheme);
   
  return (
    <div className={theme? s.conteiner : s.conteiner_dark }>
      {dailyData.length <= 0 || isApiError ? "" :<div>
        <h3 className={s.header}> {cityName} прогноз на 5 дней</h3>
        <ul className={s.content}>
          {dailyData.map((weather, index) => {
            const iconcode = weather.weather[0].icon;
            const imgURL = "http://openweathermap.org/img/w/" + iconcode + ".png";
            const day = (weather.dt_txt).slice(8, 11) ;
            const month = (weather.dt_txt).slice(5, 7) ;
            const date = day +"."+ month;
            const ms = weather.dt * 1000;
            const weekdayName = new Date(ms).toLocaleString("ru", {weekday: "long"});
            return( <li className={s.item_conteiner} key={index}>
              <p className={s.item_header}>{weekdayName}</p>
              <p className={s.item_header}>{date}</p>
              <img src={imgURL} className={s.item_img}/>
              <div className={s.item_box}>
                <img src='/img/term.png' className={s.item_icon}/>
                <p className={s.item_data}>{Math.round(weather.main.temp)}&deg;C</p>
              </div>
              <div className={s.item_box}>
                <img src='/img/wind.png' className={s.item_icon}/>
                <p className={s.item_data}>{(weather.wind.speed).toFixed(1)} м/с</p>
              </div>
              <div className={s.item_box}>
                <img src='/img/humidity.png' className={s.item_icon}/>
                <p className={s.item_data}>{weather.main.humidity}%</p>
              </div>
            </li>
            );
          }) 
          }
        </ul>
      </div>}
     
    </div>
  );
};

export default WeatherBox;
