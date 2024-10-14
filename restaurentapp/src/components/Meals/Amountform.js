import React,{useState,useContext} from "react"
import './Amountform.css'
import CartContext from "../../store/cart-context"

const Amountform=(prop)=>{

  const ctx=useContext(CartContext)
  
  const [quantity,setQuantity]=useState(1)

  const inputHandler =(event)=>{
    setQuantity(event.target.value)
  }

  const cartDataHandler=(event)=>{
    event.preventDefault()
        
        ctx.addItem({
          id:prop.children.id,
          dishName:prop.children.dishName,
          price:prop.children.price,
          quantity:+quantity
        })
  }

    return(
        <form onSubmit={cartDataHandler}>
      
            <label style={{color:"black",fontWeight:'bold'}}>Amount   </label>
            <input type="number"  
            style={{width:"30px"}}
            value={quantity} 
            onChange={inputHandler} min={1}></input>
            <div>
                <button className="button" type="submit">+Add</button>
            </div>
       
        </form>

    )
}
export default Amountform