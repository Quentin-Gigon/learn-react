import React, {useState} from "react";

function MyArrayUpdateComponent(){
    const[foods, setFoods] = useState(["Pizza", "Burger", "Pasta", "Ice Cream"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        //wrong approach
        //setFoods([...foods, "Salad"]);
        //this will replace the initial array with the 4 elements with an array with 5 elements
        
        //correct approach
        //a common syntactic convention when referencing the previous state is to use the name prevState or the first letter of the state variable name
        setFoods(f => [...foods, newFood]);

        //reset the input field to emtpy once the food is added
        document.getElementById("foodInput").value = "";
    }

    function handleRemoveFood(index){
        //underscore is a convention for a parameter that is not used
        setFoods(foods.filter((_, i) => i !== index));
    }

    return(
        <>
        <hr />
        <ul>
            {foods.map((food, index) => (
                <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>
            ))}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name" />
        <button onClick={handleAddFood}>Add Food</button>
        <hr />
        </>
    )

}

export default MyArrayUpdateComponent;