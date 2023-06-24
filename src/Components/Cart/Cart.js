import styles from "./Cart.module.css"
import Modal from "../UI/Modal"
export default function Cart(props){
const Mealitems= [{id:"c1", name:"Sushi"}].map(item=>{
    return(<li key={item.id}>{item.name}</li>)
})
    return(
    <Modal onClose={props.onClose}>
{Mealitems}
<div className={styles[`cart-items`]}>
<span>Total Amount</span>
<span>35.69</span>
</div>
<div className={styles.actions}>
    <button className={styles[`button--alt`]} onClick={props.onClose}>Close</button>
    <button className={styles.button}>Order</button>
</div>
        </Modal>
    )
}