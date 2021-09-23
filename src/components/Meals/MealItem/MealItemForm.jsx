import React, {useRef, useState} from 'react'
import { Input } from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {


    const [error, setError] = useState(false)
    const amountInputRef = useRef()

    const submitHandler = e => {
        e.preventDefault();

        const enteredAmount = Number(amountInputRef.current.value)
        if(enteredAmount < 1 || enteredAmount >5) {
            setError(true)
            return
        }

        props.addToCart(enteredAmount)
        setError(false)

    }



    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input
                ref={amountInputRef}
                label="Amount" 
                input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}
            />
            <button>+ Add</button>
            {
                error && (
                    <p>Please enter a valid amount (1-5)</p>
                )
            }
        </form>
    )
}

export default MealItemForm
