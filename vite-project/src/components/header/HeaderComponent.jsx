import styles from "./HeaderComponent.module.css";

function HeaderBox() {
   return (
       <div className={styles.header_box}>
        <div className={styles.header_block}>
            <img src="../../public/img/logo.png" className={styles.header_img}/>
            <h1 className={styles.header}>SearchWeather</h1>
        </div>
        {/* <h2 className={styles.header}> Хорошая погода каждый день!</h2> */}
        <h2 className={styles.header}>У природы нет пдохой погоды!</h2>
       </div>
)}

export default HeaderBox

