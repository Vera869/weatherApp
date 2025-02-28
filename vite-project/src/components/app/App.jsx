import styles from "./App.module.css";
import HeaderBox from "../header/HeaderComponent";
import WeatherBox from "../weatherBox/WeatherComponent";
import { useSelector } from "react-redux";
import FooterBox from "../footer/footerComponent";
import FormToCity from "../form/FormComponent";

function App() {
  const theme = useSelector((state) => state.weather.changeTheme);
  return (
    <div className={theme ? styles.app : styles.app_darck_theme}>
      <HeaderBox />
      <div  className={styles.content}>
        <FormToCity />
        <WeatherBox />
      </div>
      <FooterBox />
    </div>
  );
}

export default App;
