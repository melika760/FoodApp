
import classes from "./Checkout.module.css";
import useInput from "../../hook/use-input";
export default function Checkout(props){
  const {enteredvalue:firstName,hasError:firstNameHasError,Inputchangehandler:firstNameChangeHandler,bluredvalue:firstNameblured ,valueIsvalid:firstNameValid}=useInput(value=>value.trim()!=="")
  const {enteredvalue:streetName,hasError:streetNameHasError,Inputchangehandler:streetNameChangeHandler,bluredvalue:streetNameblured,valueIsvalid:streetNameValid}=useInput(value=>value.trim()!=="")
  const {enteredvalue:postal,hasError:postalHasError,Inputchangehandler:postalChangeHandler,bluredvalue:postalblured,valueIsvalid:postalValid}=useInput(value=>value.trim().length===6)
  const {enteredvalue:cityName,hasError:cityNameHasError,Inputchangehandler:cityNameChangeHandler,bluredvalue:cityNameblured,valueIsvalid:cityNameValid}=useInput(value=>value.trim()!=="")
  
  function confirmHandler(event){
        event.preventDefault();
   
        const formIsnotValid=!firstNameValid&&!streetNameValid&&!cityNameValid&&!postalValid
        if(formIsnotValid){
        
          return;
        }
        props.onConfirm({
          firstName:firstName,
          streetName:streetName,
          cityName:cityName,
          postal:postal
        })
    }
   
    return(    <form className={classes.form} onSubmit={confirmHandler}>
        <div className={`${classes.control} ${firstNameHasError ?classes.invalid:""}`}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' value={firstName} onChange={firstNameChangeHandler} onBlur={firstNameblured}/>
          {firstNameHasError && <p>please Enter your Name</p>}
        </div>
        <div className={`${classes.control} ${streetNameHasError ?classes.invalid:""}`}>
          <label htmlFor='street'>Street</label>
          <input type='text' id='street'value={streetName} onChange={streetNameChangeHandler} onBlur={streetNameblured} />
          {streetNameHasError && <p>please Enter valid street</p>}
        </div>
        <div className={`${classes.control} ${postalHasError ?classes.invalid:""}`}>
          <label htmlFor='postal'>Postal Code</label>
          <input type='text' id='postal' value={postal} onChange={postalChangeHandler} onBlur={postalblured} />
          {postalHasError && <p>please Enter valid PostCode.</p>}
        </div>
        <div className={`${classes.control} ${cityNameHasError ?classes.invalid:""}`}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' value={cityName} onChange={cityNameChangeHandler} onBlur={cityNameblured}/>
          {cityNameHasError && <p>please Enter valid city</p>}
        </div>
        <div className={classes.actions}>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit} >Confirm</button>
        </div>
      </form>)
}