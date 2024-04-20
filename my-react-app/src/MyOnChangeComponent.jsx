import React, {useState} from "react";

function MyOnChangeComponent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [isAdult, setIsAdult] = useState(false);
    
    return (
        <div>
            <hr />
            <p>My OnChange Component</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Adult: {isAdult ? "Yes" : "No"}</p>
            <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Enter Age" onChange={(e) => {
                setAge(e.target.value);
                setIsAdult(e.target.value >= 18);
            }} />
            <hr />
        </div>
    );
}

export default MyOnChangeComponent;