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

        setcartItem((prevItems)=>{
         let updatedItem;
        const index = prevItems.findIndex((cartItem) => cartItem.id === item.id)
          
          if (index===-1)
            {
              updatedItem=[...prevItems,item]     
            } 
            else
            {
               prevItems[index].quantity=prevItems[index].quantity+item.quantity
               updatedItem=[...prevItems]
                 
            } 
    
          return updatedItem;
        });
        
       }

    const removeitemHandler=(id)=>{
        setcartItem((prevItems)=>{
            let updatedItem;

            let index=prevItems.findIndex((item)=>item.id===id)
            let newQuantity=prevItems[index].quantity-1
            if(newQuantity>0)
            {
                prevItems[index].quantity=newQuantity
                updatedItem=[...prevItems]
            }
            else
            {
                prevItems.splice(index,1)
                updatedItem=[...prevItems]
            }
            return updatedItem;
        })
    }

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