import React,{useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../Store/cart-context";
export default function HeaderCartButton(props){
    const ctx = useContext(CartContext)
    const BageNumber = ctx.items.reduce((CurrNum,item)=>{
        return CurrNum + item.amount
    },0)
    return(
        <button className={styles.button} onClick={props.onShow}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Your Card</span>
            <span className={styles.badge}>{BageNumber}</span>
            
        </button>
     
    )
}