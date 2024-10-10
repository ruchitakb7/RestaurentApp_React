import React from "react"
import Food_header from "../../assets/Food_header.jpg"
import classes from "./Header.module.css"
const Header=()=>{

    return(
           <div>
             <header className={classes.header}>
                <h1>ReactMeals</h1>
               <button>Cart</button>
             </header>    
             <div className={classes['main-image']}>
                <img src={Food_header}
                alt=""></img>
             </div>
           </div> 
    )
}

export default Header