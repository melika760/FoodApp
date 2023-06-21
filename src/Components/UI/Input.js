import styles from "./Input.module.css"
export default function Input(props){
    return(<div className={styles.input}>
        <label >{props.label}</label>
        <input {...props.input}/>
    </div>)
}