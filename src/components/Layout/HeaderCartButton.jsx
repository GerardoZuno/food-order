import React, {useContext} from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/Cart-context'
import classes from './HeaderCartButton.module.css'

export const HeaderCartButton = ({showCartHandler}) => {
    
    const cartCtx = useContext(CartContext)
    console.log(cartCtx.cartContext.items)

   const numberOfCartItems = cartCtx.cartContext.items.reduce((curNumber, item) => {
       return curNumber + item.amount
   }, 0)

    return (
     <button 
        className={classes.button}
        onClick={showCartHandler}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
            
        </button>
    )
}
