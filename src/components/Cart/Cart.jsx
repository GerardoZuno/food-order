import React, { useContext } from "react";
import CartContext from "../../store/Cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

export const Cart = ({ showCartHandler }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.cartContext.totalAmount;
  const hashItems = cartCtx.cartContext.items.length > 0;

  const cartItemAddHandler = (item) => {};

  const cartItemRemoveHandler = (id) => {};

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

  return (
    <Modal showCartHandler={showCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={showCartHandler}>
          Close
        </button>
        {hashItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
