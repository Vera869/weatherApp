import { useDispatch, useSelector } from "react-redux";
import s from "./HeaderComponent.module.css";
import { setChangeTheme } from "../../store/WeatherSlice";

function HeaderBox() {
  const theme = useSelector((state) => state.weather.changeTheme);
  const dispatch = useDispatch();
  return (
    <div className={s.header_block}>
      <img
        onClick={() => dispatch(setChangeTheme())}
        src="/img/logo.png"
        alt="Сменить тему"
        className={s.header_img}
      />
      <h1 className={theme ? s.header : `${s.header} ${s.dark}`}>
        <span>W</span>
        <span>e</span>
        <span>a</span>
        <span>t</span>
        <span>h</span>
        <span>e</span>
        <span>r</span>
        <span>l</span>
        <span>y</span>
      </h1>
    </div>
  );
}

export default HeaderBox;
