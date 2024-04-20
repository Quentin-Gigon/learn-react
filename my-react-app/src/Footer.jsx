/*
React components are functions that return JSX. 
The function name should start with a capital letter. 
The function name should be the same as the file name. 
The function should return a single JSX element. 
The function should be exported at the end of the file.
*/
function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} My React App</p> {/*JavaScript expression can be inserted using {}*/}
        </footer>
    );
}

export default Footer;