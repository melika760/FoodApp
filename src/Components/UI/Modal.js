import React,{Fragment} from "react";
import ReactDOM  from "react-dom";
import styles from "./Modal.module.css"
function Backdrop(){
    return(<div className={styles.backdrop}/>)
}
function ModalOverley(props){
    return(<div className={styles.modal}><div className={styles.content}>{props.children}</div></div>)
}
const portalEl= document.getElementById("Overleys")
export default function Modal(props){
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop/>,portalEl)}
            
            {ReactDOM.createPortal(<ModalOverley>{props.children}</ModalOverley>,portalEl)}
        </Fragment>
    )
}