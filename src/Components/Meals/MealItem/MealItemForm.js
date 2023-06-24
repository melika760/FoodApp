import React,{useRef , useState} from "react"
import styles from "./MealItemForm.module.css"
import Input from "../../UI/Input"
export default function MealItemForm(props){
    const InputRef=useRef();
    const[formIsValid,SetFormIsValid]= useState(true)
    function submitHandler(event){
        event.preventDefault();
        const enteredAmount=InputRef.current.value;
        const NumenteredAmount = +enteredAmount;
        if(enteredAmount.trim().length===0 || NumenteredAmount<1 || NumenteredAmount>5){
            SetFormIsValid(false)
            return;
        }
        props.AddAmount(NumenteredAmount)  
    }
    
    
    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <Input label="Amount"  ref={InputRef} input={{
                type:"number",
                min:"1",
                max:"5",
                step:"1",
                defaultValue:"1",
            
            }}/>
<button>ADD</button>
{!formIsValid && <p>Please Enter correct amount (1-5)</p>}
        </form>
    )
}