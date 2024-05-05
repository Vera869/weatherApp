import styles from './FormComponent.module.css'

const GetCityAtForm = () => {
   return(
      <form className={styles.form}>
         <h2 className={styles.form_header}>Выберите город</h2>
         <input className={styles.form_Input} type="text" name="city" placeholder="Город"/>
         <button className={styles.form_Button}>Узнать погоду</button>
      </form>
   )
}
export default GetCityAtForm