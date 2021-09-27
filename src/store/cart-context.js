import React, {createContext} from "react";


const CartContext = createContext({
    items: ['1'],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {},
})

export default CartContext