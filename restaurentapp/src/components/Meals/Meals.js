import React from "react"
import "./Meals.css"

const Meals=()=>{
    const DummyMeal=[{dishName:"Sushi",desc:"Finext Fish and Veggies",price:22.99},
        {dishName:"Schnitzel",desc:"A Germen Speciality",price:16.50},
        {dishName:"Barbecue Burger",desc:"American,raw,meaty",price:12.99},
        {dishName:"Green Bowl",desc:"Healty and a green",price:16.00}]

    return(
        <div className="meals_display">
            <ul>
                {DummyMeal.map((meal)=>(
                    <li>
                        <h3>{meal.dishName}</h3>
                        <h5>{meal.desc}</h5>
                        <h4>${meal.price}</h4>
                     
                    </li>
                    
                ))
                }
            </ul>
        </div>
    )
}


export default Meals