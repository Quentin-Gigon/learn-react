//To use a react hook we need to import it from the react library
import React, { useState } from 'react';

//useState returns an array with 2 elements
//The first element is the current state value
//The second element is a function that lets you update the state

function MyHookComponent() {
    //useState(0) sets the initial state to 0
    //count is the current state value
    //setCount is the function that lets you update the state
    const [count, setCount] = useState(0);
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

export default MyHookComponent;