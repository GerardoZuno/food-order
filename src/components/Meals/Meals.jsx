import React from 'react'
import { AvailableMeals } from './AvailableMeals'
import classes from './Meals.module.css'
import MealsSummary from './MealsSummary'


export const Meals = () => {
    return (
        <>
           <MealsSummary/>
           <AvailableMeals/>
            
        </>
    )
}
