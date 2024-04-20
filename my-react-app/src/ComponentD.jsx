import React, {useState, useContext} from 'react';
import {UserContext} from './ComponentA.jsx';

//In our consumer component, we will
// 1. Import the context object
// 2. Use the useContext hook to consume the context value
// 3. Render the context value
// 4. Export the consumer component


function ComponentD() {

    const user = useContext(UserContext);

    return (
        <div>
            <div className="box">
                <h1>Component D</h1>
                <h2>{"Bye " + user}</h2>
            </div>
        </div>
    );
}

export default ComponentD;