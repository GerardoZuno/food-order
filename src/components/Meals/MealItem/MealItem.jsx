import React from 'react'
import classes from './MealItem.module.css'

const MealItem = ({meal}) => {

    const price = `$${meal.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div className=""><h3>{meal.name}</h3></div>
            <div className={classes.description}>{meal.description}</div>
            <div className={classes.price}>{price}</div>

        </li>
    )
}

export default MealItem
