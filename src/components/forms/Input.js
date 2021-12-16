import styles from "./Input.module.css"

function Input({ placeholder, name, value, handleEvent}){
    return(
        <div className={styles.form_group}>
            <label>{name}</label>
            <input type="text" placeholder={placeholder} name={name} value={value} onChange={handleEvent}/>
        </div>
    )
}
export default Input