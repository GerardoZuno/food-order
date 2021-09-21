import React from 'react'
import classes from './Card.Module.css'

export const Card = (props) => {

    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}
