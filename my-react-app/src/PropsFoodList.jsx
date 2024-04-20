function PropsFoodList(props){
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map((item) =>
        <li key={item.id}>
            {item.name}: &nbsp;
            {item.calories} calories
        </li>
    );

    return(
        <div>
            <h2>{category} Props List</h2>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default PropsFoodList;