import {useState} from "react";
export default function useInput(validateValue){
const[enteredvalue,setenteredvalue]=useState("");
const[istouched,setistouched]=useState(false);
const valueIsvalid=validateValue(enteredvalue);
const hasError = !valueIsvalid && istouched;
function Inputchangehandler(event){
    setenteredvalue(event.target.value)
}
function bluredvalue(){
    setistouched(true)
}
return{
    enteredvalue,hasError,valueIsvalid,Inputchangehandler,bluredvalue
}
}