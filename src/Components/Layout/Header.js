import React,{Fragment} from "react";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";
import MealsImage from "./meals.jpg"
export default function Header(){
    return(
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeal</h1>
               <HeaderCartButton/>
            </header>
            <div className={styles["main-image"]}>
<img src={MealsImage} alt="Deliciouse Food"/>
            </div>
        </Fragment>
    )
}