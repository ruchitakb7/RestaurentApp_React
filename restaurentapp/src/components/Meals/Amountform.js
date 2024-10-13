import React,{useState} from "react"
import './Amountform.css'

const Amountform=(prop)=>{
  const [amount,setAmount]=useState(1)

  const amountHandler=(event)=>{
    event.preventDefault()
         console.log(prop.children)
  }

    return(
        <form onSubmit={amountHandler}>
            <lable style={{color:"black",fontWeight:'bold'}}>Amount   </lable>
            <spam className="amountbox">{amount}</spam>
            <div >
                <button className="button" type="submit">+Add</button>
            </div>
        </form>

    )
}
export default Amountform