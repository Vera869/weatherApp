import styles from './App.module.css'
//import { getWeatherCity } from './api';
import GetCityAtForm from './components/form/FormComponent';
import HeaderBox from './components/header/HeaderComponent';
import WeatherBox from './components/weatherBox/WeatherComponent';

function App() {
 //const city = "London";

 //getWeatherCity(city).then(data => console.log(data));
  return (
    <div className={styles.app}>
      <HeaderBox />
      <GetCityAtForm />
      <WeatherBox />
    </div>
  )
}

export default App
