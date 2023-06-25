import React,{useContext, useState,useEffect} from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../Store/cart-context";
export default function HeaderCartButton(props){
    
    const [additemheader,setadditemheader] = useState(false)
    const ctx = useContext(CartContext)
    const BageNumber = ctx.items.reduce((CurrNum,item)=>{
        return CurrNum + item.amount
    },0)
    const btnclass = `${styles.button} ${additemheader? styles.bump : " "}`;
    const {items}= ctx
    useEffect(()=>{
        if(items.length===0){
return;
        }
        setadditemheader(true)
    const Timer = setTimeout(()=>{
     setadditemheader(false)
        },300)
    return()=>{
        clearTimeout(Timer)
    }
    },[items])
    return(
        <button className={btnclass} onClick={props.onShow}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Your Card</span>
            <span className={styles.badge}>{BageNumber}</span>
            
        </button>
     
    )
}