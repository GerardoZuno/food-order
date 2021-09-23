import React, {useContext, useEffect, useState} from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/Cart-context'
import classes from './HeaderCartButton.module.css'

export const HeaderCartButton = ({showCartHandler}) => {

    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false)
    
    const cartCtx = useContext(CartContext)

   const numberOfCartItems = cartCtx.cartContext.items.reduce((curNumber, item) => {
       return curNumber + item.amount
   }, 0)

   const {items} = cartCtx.cartContext

   const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`


   useEffect(() => {
    if(items.length === 0){
        return 
    }
        setBtnIsHighLighted(true)
       const timer = setTimeout(() => {
            setBtnIsHighLighted(false)

        }, 300)

       return () => {
           clearTimeout(timer)
       }

   }, [items])

    return (
     <button 
        className={btnClasses}
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
