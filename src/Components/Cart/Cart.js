import React,{useContext} from "react"
import styles from "./Cart.module.css"
import Modal from "../UI/Modal"
import CartItem from "./CartItem"
import CartContext from "../../Store/cart-context"
export default function Cart(props){
const ctx = useContext(CartContext);
const totalAmount = ctx.totalAmount.toFixed(2);
const HasItem = ctx.items.length>0;
function RemoveHandler(id){

}
function AddHandler(item){

}
const Mealitems= ctx.items.map(item=>{
    return(
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}  onAdd={AddHandler.bind(null,item)} onRemove={RemoveHandler.bind(null,item.id) }/>
    )
})
    return(
    <Modal onClose={props.onClose}>
{Mealitems}
<div className={styles[`cart-items`]}>
<span>Total Amount</span>
<span>{totalAmount}</span>
</div>
<div className={styles.actions}>
    <button className={styles[`button--alt`]} onClick={props.onClose}>Close</button>
   {HasItem && <button className={styles.button}>Order</button>}
</div>
        </Modal>
    )
}