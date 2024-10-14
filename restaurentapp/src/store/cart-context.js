import React,{ createContext } from "react";

const CartContext= React.createContext({
    items:[],
    totalquantity:0,
    totalAmount:0,
    addItem:()=>{},
    removeItem:()=>{}

})
export default CartContext