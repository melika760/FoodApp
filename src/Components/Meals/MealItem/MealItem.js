import React,{useContext} from "react";
import styles from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"
import CartContext from "../../../Store/cart-context"
export default function MealItem(props){
    const price=`$${props.price.toFixed(2)}`;
    const ctx = useContext(CartContext);
    function AddToCart(amount){
        ctx.addItem({
            id:props.id,
            name:props.name,
            price:props.price,
            amount:amount

        })
    }
    return(
        <li className={styles.meal}>
        <div >
<h3>{props.name}</h3>
<div className={styles.description}>{props.description}</div>
<div className={styles.price}>{price}</div>
        </div>
        <div><MealItemForm AddAmount={AddToCart}/></div>
        </li>
    )
}