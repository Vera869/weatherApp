import styles from './App.module.css'
import GetCityAtForm from './components/form/FormComponent';
import HeaderBox from './components/header/HeaderComponent';
import WeatherBox from './components/weatherBox/WeatherComponent';

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
