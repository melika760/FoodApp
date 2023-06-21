import styles from "./MealItemForm.module.css"
import Input from "../../UI/Input"
export default function MealItemForm(){
    return(
        <form className={styles.form}>
            <Input label="Amount" input={{
                type:"number",
                min:"1",
                max:"5",
                step:"1",
                defaultValue:"1"
            }}/>
<button>ADD</button>
        </form>
    )
}