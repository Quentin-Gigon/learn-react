import React, {useState} from 'react';

function MyObjectUpdateComponent(){
    const [car, setCar] = useState({make: 'Toyota', 
                                    model: 'Corolla', 
                                    year: 2015});
    
    function handleYearChange(event){
        //wrong approach
        //setCar({year: event.target.value});
        //this will replace the initial object with the 3 properties with an object with just the year property 
    
        //correct approach
        //a common syntactic convention when referencing the previous state is to use the name prevState or the first letter of the state variable name
        setCar(c => ({...car, year: event.target.value}));
    }
    
    function handleMakeChange(event){
        setCar(c => ({...car, make: event.target.value}));
    }

    function handleModelChange(event){

        setCar(c => ({...car, model: event.target.value}));
    }

    
    return (
        <div>
            <hr />
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange} /><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/>
            <hr />
        </div>
    )

}

export default MyObjectUpdateComponent;