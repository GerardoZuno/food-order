import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

export const HeaderCartButton = ({showCartHandler}) => {
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
               4
            </span>
            
        </button>
    )
}
