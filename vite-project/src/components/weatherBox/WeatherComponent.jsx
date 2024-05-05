import styles from './WeatherComponent.module.css';

function WeatherBox() {

  return (
    <div className={styles.weather}>
      <h3 className={styles.weather_header}>Здесь будут данные о погоде</h3>
      <ul className={styles.weather_content}>
         <li className={styles.content_item}>
            <img src="../../public/img/sunshine_big.png" className={styles.item_img}/>
            <p className={styles.item_content}>Температура</p>
            <p className={styles.item_content}>Скорость ветра</p>
            <p className={styles.item_content}>Влажность</p>
         </li>
         <li className={styles.content_item}>
            <img src="../../public/img/partly_cloudy_big.png" className={styles.item_img}/>
            <p className={styles.item_content}>Температура</p>
            <p className={styles.item_content}>Скорость ветра</p>
            <p className={styles.item_content}>Влажность</p>
         </li>
         <li className={styles.content_item}>
            <img src="../../public/img/thunderstorms_big.png" className={styles.item_img}/>
            <p className={styles.item_content}>Температура</p>
            <p className={styles.item_content}>Скорость ветра</p>
            <p className={styles.item_content}>Влажность</p>
         </li>
         <li className={styles.content_item}>
            <img src="../../public/img/thunderstorms_big.png" className={styles.item_img}/>
            <p className={styles.item_content}>Температура</p>
            <p className={styles.item_content}>Скорость ветра</p>
            <p className={styles.item_content}>Влажность</p>
         </li>         <li className={styles.content_item}>
            <img src="../../public/img/thunderstorms_big.png" className={styles.item_img}/>
            <p className={styles.item_content}>Температура</p>
            <p className={styles.item_content}>Скорость ветра</p>
            <p className={styles.item_content}>Влажность</p>
         </li>         <li className={styles.content_item}>
            <img src="../../public/img/thunderstorms_big.png" className={styles.item_img}/>
            <p className={styles.item_content}>Температура</p>
            <p className={styles.item_content}>Скорость ветра</p>
            <p className={styles.item_content}>Влажность</p>
         </li>
      </ul>
    </div>
  )
}

export default WeatherBox
