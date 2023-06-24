import styles from "./AvailableMeals.module.css"
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
export default function AvailableMeals(){
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];
      const MealItems= DUMMY_MEALS.map(MEAL=>{
       return (<MealItem key={MEAL.id} name={MEAL.name} price={MEAL.price} description={MEAL.description} id={MEAL.id}/>)
      }) 
      return(
       
        <section className={styles.meals}>
             <Card><ul>{MealItems}</ul></Card>
        </section>
      )
}