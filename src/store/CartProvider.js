import React, {useReducer} from 'react'
import CartContext from "./Cart-context"

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD_CART_ITEM'){
       
       const existingCartItemsIndex = state.items.findIndex(item => item.id === action.payload.id)
       const existingCartItem = state.items[existingCartItemsIndex] 
       let updatedItems;

       if(existingCartItem){
         const updatedItem = {
               ...existingCartItem,
               amount: existingCartItem.amount + action.payload.amount
           }
           updatedItems = [...state.items]
           updatedItems[existingCartItemsIndex] = updatedItem
       } else {
           updatedItems = state.items.concat(action.payload)

       }
      

       const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount 
       return {
           items: updatedItems,
           totalAmount: updatedTotalAmount,
       } 
    }
    
       return  defaultCartState
}


 const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = item => {
        dispatchCartAction({
            type: 'ADD_CART_ITEM',
            payload: item
        })
    }
    const removeItemFromCartHandler = id => {
        dispatchCartAction({
            type: 'REMOVE_CART_ITEM',
            dispatch: id
        })
    }

   const cartContext = {
       items: cartState.items,
       totalAmount: cartState.totalAmount,
       addItem: addItemToCartHandler,
       removeItem: removeItemFromCartHandler, 
   }

   return(
       <CartContext.Provider value={{
           cartContext
       }}>
           {props.children}
       </CartContext.Provider>
   )
}


export default CartProvider