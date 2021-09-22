import React, {useContext} from 'react'
import CartContext from '../../../store/Cart-context'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = ({meal}) => {
    const Ctx = useContext(CartContext)
    

    const addToCart = (amount) => {
           Ctx.cartContext.addItem({
               id: meal.id,
               name: meal.name,
               amount: amount,
               price: meal.price,
           })
    }

    const price = `$${meal.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div className=""><h3>{meal.name}</h3></div>
            <div className={classes.description}>{meal.description}</div>
            <div className={classes.price}>{price}</div>

        
        <div>
            <MealItemForm addToCart={addToCart}/>
        </div>
      </li>  
    )
}

export default MealItem
