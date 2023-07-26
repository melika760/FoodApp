import React,{useContext,useState} from "react"
import styles from "./Cart.module.css"
import Modal from "../UI/Modal"
import CartItem from "./CartItem"
import CartContext from "../../Store/cart-context"
import Checkout from "./Checkout"
export default function Cart(props){
    const[ischeckout,setischeckout]=useState(false)
    function checkform(){
        setischeckout(true)
    }
const ctx = useContext(CartContext);
const totalAmount = ctx.totalAmount.toFixed(2);
const HasItem = ctx.items.length>0;
function RemoveHandler(id){
ctx.removeItem(id)
}
function AddHandler(item){
ctx.addItem({...item,amount:1})
}
const Mealitems=<ul  className={styles[`cart-items`]}> {ctx.items.map(item=>{
    return(
        
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}  onAdd={AddHandler.bind(null,item)} onRemove={RemoveHandler.bind(null,item.id) }/>
        )
})}</ul>
const Modalactions=<div className={styles.actions}>
<button className={styles[`button--alt`]} onClick={props.onClose}>Close</button>
{HasItem && <button className={styles.button} onClick={checkform}>Order</button>}
</div>
    return(
    <Modal onClose={props.onClose}>
{Mealitems}
<div className={styles.total}>
<span>Total Amount</span>
<span>{totalAmount}</span>
</div>

{ischeckout && <Checkout onCancel={props.onClose}/>}
{!ischeckout && Modalactions}

        </Modal>
    )
}