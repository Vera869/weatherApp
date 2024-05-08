import styles from './App.module.css'
import GetCityAtForm from '../form/FormComponent';
import HeaderBox from '../header/HeaderComponent';
import WeatherBox from '../weatherBox/WeatherComponent';

function App() {
  return (
    <div className={styles.app}>
      <HeaderBox />
      <GetCityAtForm />
      <WeatherBox />
    </div>
  )
}

export default App
