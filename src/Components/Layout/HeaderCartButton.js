
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
export default function HeaderCartButton(props){
    return(
        <button className={styles.button} onClick={props.onShow}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Your Card</span>
            <span className={styles.badge}>3</span>
            
        </button>
     
    )
}