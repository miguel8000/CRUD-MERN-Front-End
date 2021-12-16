import styles from "./Button.module.css"

function Button({name, handleEvent}){
    return(
        <div className={styles.btn_form}>
            <button onClick={handleEvent}> {name} </button>
        </div>
    )
}
export default Button