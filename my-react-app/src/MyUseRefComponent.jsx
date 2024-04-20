import { useState, useEffect, useRef} from "react";

function MyUseRefComponent(){

    //UseRef is better than useEffect for tracking values that change over time
    //it prevents re-renders
    const ref = useRef(0);
    const inputRef = useRef(0);

    //let [number, setNumber] = useState(0);

    useEffect( () => {
        console.log("Component rendered");
    });

    function handleClick(){
        //bad practice
        //setNumber(number + 1);
        //good practice
        //setNumber(prevNumber => prevNumber + 1);
        ref.current++;
        //the value of ref.current will change without causing a re-render of the component
        //we want to avoid re renders because they are expensive and slow down the app 
        console.log(ref.current);
        inputRef.current.focus();
        inputRef.current.value = "Hello";
        inputRef.current.style.backgroundColor = "yellow";
        //the above code will change the input field without causing a re-render
    }

    return(
        <>
        <button onClick={handleClick}>
            Click me!
        </button>
        <input type="text" ref={inputRef}/>
        </>
    )
}

export default MyUseRefComponent;
