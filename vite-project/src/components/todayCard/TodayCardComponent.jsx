import { useSelector } from "react-redux";
import s from "./TodayCardComponent.module.css";

const TodayCard = () => {
  const todayData = useSelector((state) => state.weather.todayWeather);
  //   console.log(todayData);
  //   const date = new Date().toISOString().slice(0, 10);
  const day = todayData[0].dt_txt.slice(8, 11);
  const month = todayData[0].dt_txt.slice(5, 7);
  const date = day + "." + month;
  const ms = todayData[0].dt * 1000;
  const weekdayName = new Date(ms).toLocaleString("ru", {
    weekday: "long",
  });
  return (
    <div className={s.card}>
      <div className={s.header}>
        <p className={s.header_item}>{date}</p>
        <p className={s.header_item}>{weekdayName}</p>
      </div>
      <ul className={s.content}>
        {todayData.map((weather, index) => {
         //  console.log(weather.dt_txt.slice(0, 10));
          const iconcode = weather.weather[0].icon;
          const imgURL = "http://openweathermap.org/img/w/" + iconcode + ".png";
          const day = weather.dt_txt.slice(8, 11);
          const month = weather.dt_txt.slice(5, 7);
          const date = day + "." + month;
          const ms = weather.dt * 1000;
          const weekdayName = new Date(ms).toLocaleString("ru", {
            weekday: "long",
          });
          return (
            <li className={s.item_conteiner} key={index}>
              <p className={s.item_header}>{weekdayName}</p>
              <p className={s.item_header}>{date}</p>
              <img src={imgURL} className={s.item_img} />
              <div className={s.item_box}>
                <img src="/img/term.png" className={s.item_icon} />
                <p className={s.item_data}>
                  {Math.round(weather.main.temp)}&deg;C
                </p>
              </div>
              <div className={s.item_box}>
                <img src="/img/wind.png" className={s.item_icon} />
                <p className={s.item_data}>
                  {weather.wind.speed.toFixed(1)} м/с
                </p>
              </div>
              <div className={s.item_box}>
                <img src="/img/humidity.png" className={s.item_icon} />
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
