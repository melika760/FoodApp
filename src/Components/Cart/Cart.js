import React,{useContext,useState} from "react"
import styles from "./Cart.module.css"
import Modal from "../UI/Modal"
import CartItem from "./CartItem"
import CartContext from "../../Store/cart-context"
import Checkout from "./Checkout"
export default function Cart(props){
    const[ischeckout,setischeckout]=useState(false);
    const[isSubmitting,setISubmitting]=useState(false);
    const[didSubmitt,setdidSubmit]=useState(false)
    function checkform(){
        setischeckout(true)
    }
    const ordersubmithandler=async(userData)=>{
        setISubmitting(true)
await fetch("https://foodapp-df071-default-rtdb.firebaseio.com/orders.json",{
    method:"POST",
    body:JSON.stringify({
        use:userData,
        orderedItems:ctx.items
    })
    
})
setISubmitting(false);
setdidSubmit(true);
ctx.clearCard();
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
const cartModalContent=<React.Fragment>{Mealitems}
<div className={styles.total}>
<span>Total Amount</span>
<span>{totalAmount}</span>
</div>

{ischeckout && <Checkout onCancel={props.onClose} onConfirm={ordersubmithandler}/>}
{!ischeckout && Modalactions}</React.Fragment>
const isSubmittingcontent=<p>Sending Order Data</p>
const DidSubmitContent=
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={styles.actions}>
      <button className={styles.button} onClick={props.onClose}>
        Close
      </button>
    </div>
    </React.Fragment>

    return(
    <Modal onClose={props.onClose}>
{!isSubmitting && !didSubmitt && cartModalContent}
{isSubmitting && isSubmittingcontent}
{didSubmitt && DidSubmitContent}

        </Modal>
    )
}