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

    if(action.type === 'REMOVE_CART_ITEM'){

        
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload)
        const existingItem =  state.items[existingCartItemIndex]
        console.log(existingItem)
        const updatedTotalAmount = state.totalAmount - existingItem.price
        let updatedItems;
        if(existingItem.amount === 1){
           updatedItems = state.items.filter((item) => item.id !== action.payload)
        }else {
          const updatedItem = {...existingItem, amount: existingItem.amount -1} 
          updatedItems = [...state.items]
          updatedItems[existingCartItemIndex] = updatedItem

        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
        

       if (action.type === 'CLEAR'){
           return defaultCartState
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
            payload: id
        })
    }

    const clearCartHandler = () => {
          dispatchCartAction({
              type: 'CLEAR',
          })
    }


   const cartContext = {
       items: cartState.items,
       totalAmount: cartState.totalAmount,
       addItem: addItemToCartHandler,
       removeItem: removeItemFromCartHandler, 
       clearCart: clearCartHandler
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