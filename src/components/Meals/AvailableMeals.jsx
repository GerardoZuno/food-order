import React, {useEffect, useState} from 'react'
import { Card } from '../UI/Card';
import classes from './AvailableMeals.module.css'
import LoadingMeals from './LoadingMeals';
import MealItem from './MealItem/MealItem'

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


export const AvailableMeals = () => {
   
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect( () => {   
      
    const fetchMeals = async () => {  
      try{     
      const response = await  fetch('https://food-order-app-29fae-default-rtdb.firebaseio.com/meals.json')
      const responseData = await response.json()
      const loadedMeals = []
      for ( const key in responseData){
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }
        
       setMeals(loadedMeals)

       setTimeout(() => {
        setIsLoading(false)

       }, 2000)
      }
      catch(error){
         console.log(error)
      }
    } 

      fetchMeals()          
    }, [])

    if(isLoading) { 
      return <LoadingMeals />
      }

  
     
    const mealsList = meals.map(meal => (
        <MealItem  
        key={meal.id}
        meal={meal}/>
    ))

    return (
        <section className={classes.meals}>
            <Card>
             <ul>
                {mealsList}
            </ul>
            </Card>
        </section>
    )
}
