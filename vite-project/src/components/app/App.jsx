import styles from "./App.module.css";
import GetCityAtForm from "../form/FormComponent";
import HeaderBox from "../header/HeaderComponent";
import WeatherBox from "../weatherBox/WeatherComponent";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.weather.changeTheme);
  return (
    <div className={theme? styles.app : styles.app_darck_theme} >
      <HeaderBox />
      <GetCityAtForm />
      <WeatherBox />
    </div>
  );
}

export default App;
