function FruitsList() {
    const fruits = ['apple', 'banana', 'cherry'];
    /*
    For every fruit in the fruits array, we create a new list item
    map() is a JavaScript function that is used to iterate over an array
    Here we need to return the array this way otherwise it will be displayed as one big string
    The returned array is an array of list items
    */
    const listItems = fruits.map((fruit) =><li>{fruit}</li>)
    

    //Same logic as above, but using objects instead of strings
    const fruitObjects = [
        {name: 'apple', calories: 95},
        {name: 'banana', calories: 105},
        {name: 'cherry', calories: 5}
    ];
  
    //sort the fruitObjects array by calories
    //sort() is a JavaScript function that is used to sort an array
    //The sort function takes a function as an argument
    //The function takes two arguments and returns a number
    //If the number is negative, a is sorted before b
    //If the number is positive, b is sorted before a
    //If the number is 0, a and b are unchanged with respect to each other
    //Intuitively, you set the order of a and b based on some condition
    //Here we sort the fruits by calories
    const listItemsObjectsSorted = fruitObjects.sort((a, b) => a.calories - b.calories).map((fruit) => <li key={fruit.name}>{fruit.name}, {fruit.calories} calories</li>)
    //alternatively, you can do it this way
    //fruitObjects.sort((a, b) => {a.name.localeCompare(b.name)}); which results in sorting by name alphabetically
    //fruitObjects.sort((a, b) => {b.name.localeCompare(a.name)}); which results in sorting by name alphabetically in reverse order

    //to filter the fruitObjects array by calories
    //filter() is a JavaScript function that is used to filter an array
    //The filter function takes a function as an argument
    //The function takes one argument and returns a boolean
    //If the boolean is true, the element is kept in the array
    //If the boolean is false, the element is removed from the array
    //Here we filter the fruits by calories
    const filteredFruitObjects = fruitObjects.filter((fruit) => fruit.calories > 10);

    //To get rid of Warning: Each child in a list should have a unique "key" prop.
    //We can add a key attribute to the list item
    const listItemsObjects = fruitObjects.map((fruit) => <li key={fruit.name}>{fruit.name}, {fruit.calories} calories</li>)
    const listItemsObjectsFiltered = filteredFruitObjects.map((fruit) => <li key={fruit.name}>{fruit.name}, {fruit.calories} calories</li>)
    return (
    <ul>
        <p>List with no calories</p>
        {listItems}
        <hr/>
        <p>List with calories</p>
        {listItemsObjects}
        <hr/>
        <p>List sorted by calories</p>
        {listItemsObjectsSorted}
        <hr/>
        <p>List filtered by calories smaller than 10</p>
        {listItemsObjectsFiltered}        
    </ul>
  );
}

export default FruitsList;