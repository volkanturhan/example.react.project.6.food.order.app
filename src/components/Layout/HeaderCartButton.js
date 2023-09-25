import React, { useContext } from "react";
import CardIcon from "../Cart/CardIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const ctxCart = useContext(CartContext)
  const numberOfCartItems = ctxCart.items.reduce((currentNumber,item)=>{
    return currentNumber+ item.amount;
  },0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span >Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
