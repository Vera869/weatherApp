import { useDispatch } from "react-redux";
import styles from "./HeaderComponent.module.css";
import { setChangeTheme } from "../../store/WeatherSlice";

function HeaderBox() {
    const dispatch = useDispatch();
   return (
        <div className={styles.header_block}>
            <img onClick={() => dispatch(setChangeTheme())} src="/img/logo.png" alt="Сменить тему" className={styles.header_img}/>
            <h1 className={styles.header}>SearchWeather</h1>
        </div>
)}

export default HeaderBox

