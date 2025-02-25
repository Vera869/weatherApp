// import { useDispatch } from "react-redux";
import s from "./footerComponent.module.css";
// import { setChangeTheme } from "../../store/WeatherSlice";

function FooterBox() {
//   const dispatch = useDispatch();
  return (
    <div className={s.footer_block}>
      <h1 className={s.footer}>Created by Vereneya_craft</h1>
    </div>
  );
}

export default FooterBox;
