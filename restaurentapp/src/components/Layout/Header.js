import React,{useContext} from "react"
import Food_header from "../../assets/Food_header.jpg"
import CartIcon from "../../assets/carticon.jpg"
import classes from "./Header.module.css"
import CartContext from "../../store/cart-context"

const Header=({onCartClick})=>{

  const ctx= useContext(CartContext)
  

    return(
           <div>
             <header className={classes.header}>
              <div className={classes.container}>
              <div className={classes.box1}>
              <h1 >ReactMeals</h1>
              </div>
               <div className={classes.box2}>
                <img src={CartIcon} alt="" className={classes.cartimg} onClick={onCartClick}></img>
                <p> Your Cart </p>
                <spam className={classes.cartamount}>{ctx.totalQuantity}</spam>
               </div>
             </div>
             </header> 
             <div className={classes['main-image']}>
                <img src={Food_header}
                alt=""></img>
             </div>
            <div className={classes.summary}>
              <h2>Delicious Food Delivery To You</h2>
              <p>Choose your favourite meal from our brand selection of available meals and enjoy a delicious lunch
                or dinner at home
              </p>
              <p>
                All our food cooks with high quality ingredients and of course just in time and experienced chefs!
              </p>
              </div> 
           </div> 
    )
}

export default Header