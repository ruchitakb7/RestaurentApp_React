import React, { useState,useEffect } from "react";
import CartContext from "./cart-context";

const CartProvider=(props)=>{

    const [cartItem,setcartItem]=useState([])
    const [totalAmount,settotalAmount]=useState(0)
    const [totalquantity,settotalQuantity]=useState(0)
    
    useEffect(()=>{
        let amount=0,quantity=0
        cartItem.forEach((item)=>{
            amount=amount+(item.price*item.quantity)
            quantity=quantity+item.quantity
        })
        settotalAmount(amount)
        settotalQuantity(quantity)

    },[cartItem])


    const additemHandler=(item)=>{
        let index=cartItem.findIndex(cart => cart.id === item.id);
           if(index==-1)
            {
                setcartItem([...cartItem,item])
            }
            else
            {
               cartItem[index].quantity=cartItem[index].quantity+item.quantity
               setcartItem([...cartItem])
            }
       }

    const removeitemHandler=(id)=>{}

    const cartContext={
        items:cartItem,
        totalquantity:totalquantity,
        totalAmount:totalAmount,
        addItem:additemHandler,
        removeItem:removeitemHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

}
export default CartProvider