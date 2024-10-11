import React from "react"
import Food_header from "../../assets/Food_header.jpg"
import classes from "./Header.module.css"
const Header=()=>{

    return(
           <div>
             <header className={classes.header}>
                <h1>ReactMeals</h1>
               <button>Cart:{0}</button>
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