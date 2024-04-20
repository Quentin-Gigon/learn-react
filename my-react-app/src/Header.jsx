/*
React components are functions that return JSX. 
The function name should start with a capital letter. 
The function name should be the same as the file name. 
The function should return a single JSX element. 
The function should be exported at the end of the file.
*/
function Header() {
    //You can write any JavaScript expressions here
    return (
        //You can write any HTML code here
        <header>
            <h1>My React App</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr /> {/*Horizontal line*/}
        </header>
    );
}

export default Header;