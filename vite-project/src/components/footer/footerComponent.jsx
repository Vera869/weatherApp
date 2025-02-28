import { useSelector } from "react-redux";
import s from "./footerComponent.module.css";

function FooterBox() {
  const theme = useSelector((state) => state.weather.changeTheme);
  return (
    <div className={s.footer_block}>
      <h1 className={theme? s.footer : `${s.footer} ${s.dark}`}>Created by Vereneya_craft</h1>
    </div>
  );
}

export default FooterBox;
