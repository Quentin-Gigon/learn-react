import React, { useState } from 'react';


function MyUpdaterComponent() {
    const [count, setCount] = useState(0);

    
    function increment() {
        //Doing this will not work as expected
        //setCount(count + 1); // 0 + 1 = 1
        //setCount(count + 1); // 0 + 1 = 1
        //setCount(count + 1); // 0 + 1 = 1
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        //instead use the function form of setCount
        //use the PENDING state value to update the state
        //React puts updater functions in a queue and executes them in order
        //Here the updater function is called 3 times, but the state is updated only once
        //updater function syntax: function(prevState) { return newState; }
        //setCount((prevCount) => prevCount + 1);
        //setCount((prevCount) => prevCount + 1);
        //setCount((prevCount) => prevCount + 1);

        //even if updating the state just once, use the function form of setCount
        //i.e. use the PENDING state value to update the state
        //setCount((prevCount) => prevCount + 1);
        //this will future proof the code
    }
    return (
        <div>
            <hr />
            <p>My Hook Component</p>
            <p>You clicked {count} times</p>
            {/*onClick is an event handler that is called when the button is clicked*/}
            {/*setCount(count + 1) updates the state by incrementing the current state value by 1*/}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            {/*setCount(count - 1) updates the state by decrementing the current state value by 1*/}
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            {/*setCount(0) updates the state by setting the current state value to 0*/}
            <button onClick={() => setCount(0)}>Reset</button>

        </div>
    );
}

export default MyUpdaterComponent;