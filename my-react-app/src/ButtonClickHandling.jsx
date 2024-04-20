function ButtonClickHandling() {
    //Function to handle button click
    const handleClick = () => console.log("Ouch!😖");
    
    //Function to handle button click with name
    const handleClick2 = (name) => console.log(name+" stop clicking me");

    return (
        <>
        {/*Button element with an onClick event handler
        The handleClick function is called when the button is clicked
        <button onClick={handleClick}>Click me 😃</button>*/}
        
        {/*
        Button element with an onClick event handler
        The handleClick2 function is called when the button is clicked with the argument "Bro"
        */}
        <hr />
        <button onClick={() => handleClick2("Bro")}>Click me 😃</button>
        {/*Other event handlers include: onChange, onSubmit, onMouseOver, onMouseOut, onDoubleClick etc.*/}
        </>
    );
}

export default ButtonClickHandling;