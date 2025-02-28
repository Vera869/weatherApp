import { useDispatch, useSelector } from "react-redux";
import s from "./HeaderComponent.module.css";
import { setChangeTheme } from "../../store/WeatherSlice";

function HeaderBox() {
  const theme = useSelector((state) => state.weather.changeTheme);
  console.log(theme);
  const dispatch = useDispatch();
  return (
    <div className={s.header_block}>
      <img
        onClick={() => dispatch(setChangeTheme())}
        src="/img/logo.png"
        alt="Сменить тему"
        className={s.header_img}
      />
      <h1 className={theme ? s.header : s.header_dark}>Weatherly</h1>
    </div>
  );
}

export default HeaderBox;
