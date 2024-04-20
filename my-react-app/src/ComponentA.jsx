import React, {useState, createContext} from 'react';
import ComponentB from "./ComponentB";

//In our provider component, we will
// 1. Create a context object using createContext
// 2. Create a state variable using useState
// 3. Provide the context value using the Provider component
// 4. Wrap the children components in the Provider component
// 5. Export the context object


export const UserContext = createContext();

function ComponentA() {

    const  [user, setUser] = useState("John");
    return (
        <div>
            <div className="box">
                <h1>Component A</h1>
                <h2>{"Hello " + user}</h2>
                <UserContext.Provider value={user}>
                    <ComponentB user={user}/>
                </UserContext.Provider>
            </div>
        </div>
    );
}

export default ComponentA;