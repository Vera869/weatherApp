import styles from './WeatherComponent.module.css';

function WeatherBox() {
 //const city = "London";

 //getWeatherCity(city).then(data => console.log(data));
  return (
    <div className={styles.weather}>
      <h3 className={styles.weather_header}>Прогноз на сегодня и ближайшие 5 дней в городе </h3>
      <ul className={styles.weather_content}>
         <li className={styles.content_item}>
            <img src="/img/sunshine_big.png" className={styles.item_img}/>
            <p className={styles.item_content}>Температура</p>
            <p className={styles.item_content}>Скорость ветра</p>
            <p className={styles.item_content}>Влажность</p>
         </li>
         <li className={styles.content_item}>
            <img src="/img/partly_cloudy_big.png" className={styles.item_img}/>
            <p className={styles.item_content}>Температура</p>
            <p className={styles.item_content}>Скорость ветра</p>
            <p className={styles.item_content}>Влажность</p>
         </li>
         <li className={styles.content_item}>
            <img src="/img/thunderstorms_big.png" className={styles.item_img}/>
            <p className={styles.item_content}>Температура</p>
            <p className={styles.item_content}>Скорость ветра</p>
            <p className={styles.item_content}>Влажность</p>
         </li>
         <li className={styles.content_item}>
            <img src="/img/thunderstorms_big.png" className={styles.item_img}/>
            <p className={styles.item_content}>Температура</p>
            <p className={styles.item_content}>Скорость ветра</p>
            <p className={styles.item_content}>Влажность</p>
         </li>         <li className={styles.content_item}>
            <img src="/img/thunderstorms_big.png" className={styles.item_img}/>
            <p className={styles.item_content}>Температура</p>
            <p className={styles.item_content}>Скорость ветра</p>
            <p className={styles.item_content}>Влажность</p>
         </li>         <li className={styles.content_item}>
            <img src="/img/thunderstorms_big.png" className={styles.item_img}/>
            <p className={styles.item_content}>Температура</p>
            <p className={styles.item_content}>Скорость ветра</p>
            <p className={styles.item_content}>Влажность</p>
         </li>
      </ul>
    </div>
  )
}

export default WeatherBox
