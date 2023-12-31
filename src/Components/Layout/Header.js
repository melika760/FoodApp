import React,{Fragment} from "react";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";
import MealsImage from "./meals.jpg"
export default function Header(props){
    return(
        <Fragment>
            <header className={styles.header}>
                <h1 className={styles.head}>FoodApp</h1>
               <HeaderCartButton onShow={props.onShow}/>
            </header>
            <div className={styles["main-image"]}>
<img src={MealsImage} alt="Deliciouse Food"/>
            </div>
        </Fragment>
    )
}