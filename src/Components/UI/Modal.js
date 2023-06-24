import React,{Fragment} from "react";
import ReactDOM  from "react-dom";
import styles from "./Modal.module.css"
function Backdrop(props){
    return(<div className={styles.backdrop} onClick={props.onClose}/>)
}
function ModalOverley(props){
    return(<div className={styles.modal}><div className={styles.content}>{props.children}</div></div>)
}
const portalEl= document.getElementById("Overleys")
export default function Modal(props){
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalEl)}
            
            {ReactDOM.createPortal(<ModalOverley>{props.children}</ModalOverley>,portalEl)}
        </Fragment>
    )
}