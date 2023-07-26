import React,{useEffect,useState} from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
export default function AvailableMeals(){
  const[meals,setmeals]=useState([]);
  const[isloading,setisloading]=useState(true)
  const[httperror,sethttperror]=useState()
  useEffect(()=>{
    const fetchmeal=async()=>{
      const response = await fetch("https://foodapp-df071-default-rtdb.firebaseio.com/meals.json");
      if(!response.ok){
        throw new Error("something went wrong!")
      }
      const responseData =await response.json();
      const loadedmeal=[];
      for( const key in responseData){
        loadedmeal.push({
          id:key,
          name:responseData[key].name,
          price:responseData[key].price,
          description:responseData[key].description
        })
        setmeals(loadedmeal);
        setisloading(false)
      }
    }
    fetchmeal().catch((error)=>{
setisloading(false);
sethttperror(error.message)
    });
    
  },[])
  if(isloading){
    return(<section className={styles.mealLoad}>
      <p>loading...</p>
    </section>)
  }
  if(httperror){
    return(<section className={styles.httpError}>
      <p>{httperror}</p>
    </section>)
  }
      const MealItems= meals.map(MEAL=>{
       return (<MealItem key={MEAL.id} name={MEAL.name} price={MEAL.price} description={MEAL.description} id={MEAL.id}/>)
      }) 
      return(
       
        <section className={styles.meals}>
             <Card><ul>{MealItems}</ul></Card>
        </section>
      )
}