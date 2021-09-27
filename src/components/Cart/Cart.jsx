import React, { useContext, useState } from "react";
import CartContext from "../../store/Cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

export const Cart = ({ showCartHandler }) => {
  const [isCheckout, setIsCheckout] = useState(false)
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.cartContext.totalAmount.toFixed(2)}`;
  const hashItems = cartCtx.cartContext.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.cartContext.addItem({...item, amount: 1})
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.cartContext.removeItem(id)

  };

  const orderHandler = () => {
     setIsCheckout(true)
  }

  const submitOrderHandler = (userData) => {
        fetch('https://food-order-app-29fae-default-rtdb.firebaseio.com/orders.json', {
          method: 'POST',
          body: JSON.stringify({
            user: userData,
            orderedItems: cartCtx.cartContext.items
          })
        })
  }



  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          cartItemAddHandler={cartItemAddHandler.bind(null, item)}
          cartItemRemoveHandler={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const modalActions = (

    <div className={classes.actions}>
        <button 
        className={classes["button--alt"]}
         onClick={showCartHandler}
         >
          Close
        </button>
        {hashItems && 
        <button 
        className={classes.button}
        onClick={orderHandler}
        >Order
        </button>}
      </div>
  )

  return (
    <Modal showCartHandler={showCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      { isCheckout && <Checkout submitOrderHandler={submitOrderHandler} showCartHandler={showCartHandler}/> }
      { !isCheckout && modalActions }


      
      
    </Modal>
  );
};
