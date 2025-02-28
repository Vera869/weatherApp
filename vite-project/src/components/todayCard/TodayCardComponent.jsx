import { useSelector } from "react-redux";
import s from "./TodayCardComponent.module.css";

const TodayCard = () => {
  const todayData = useSelector((state) => state.weather.todayWeather);
  const theme = useSelector((state) => state.weather.changeTheme);
  const day = todayData[0].dt_txt.slice(8, 11);
  const month = todayData[0].dt_txt.slice(5, 7);
  const date = day + "." + month;
  const ms = todayData[0].dt * 1000;
  const weekdayName = new Date(ms).toLocaleString("ru", {
    weekday: "long",
  });
  return (
    <div className={theme ? s.card : `${s.card} ${s.card_dark}`}>
      <div className={s.header}>
        <p
          className={theme ? s.header_item_1 : `${s.header_item_1} ${s.item_dark}`}
        >
          Сегодня  
        </p>
        <p
          className={theme ? s.header_item : `${s.header_item} ${s.item_dark}`}
        >
          {date}  {weekdayName}
        </p>
      </div>
      <ul className={s.content}>
        {todayData.map((weather, index) => {
          const iconcode = weather.weather[0].icon;
          const imgURL = "http://openweathermap.org/img/w/" + iconcode + ".png";
          const time = weather.dt_txt.slice(11, 16);
          return (
            <li className={s.content_item} key={index}>
              <p
                className={
                  theme ? s.item_header : `${s.item_header} ${s.item_dark}`
                }
              >
                {time}
              </p>
              <img src={imgURL} className={s.item_img} />
              <div className={s.item_box}>
                <p className={s.item_data}>
                  {Math.round(weather.main.temp)}&deg;C
                </p>
              </div>
              <div className={s.item_box}>
                <p className={s.item_data}>
                  {weather.wind.speed.toFixed(1)}м/с
                </p>
              </div>
              <div className={s.item_box}>
                <p className={s.item_data}>{weather.main.humidity}%</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodayCard;
