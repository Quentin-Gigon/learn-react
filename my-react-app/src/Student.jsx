/*
props are passed to components as attributes
props are used to pass data from parent component to child component
In the JSX file, the syntax to use props is {props.attributeName}
*/
import PropTypes from 'prop-types';

function Student(props) {

  return (
    <>
    {/* Name and Age will be displayed, but the values will be passed from the parent component via name and age */}
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    <hr /> {/*Horizontal line*/}
    </>
  );
}

//PropTypes are used to enforce the type of props passed to a component
//If the type of prop passed is not as expected, a warning will be shown in the console
//Good practice to use PropTypes
Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

//defaultProps are used to set default values to props
//If a prop is not passed from the parent component, the default value will be used
Student.defaultProps = {
    name: "John Doe",
    age: 18,
    isStudent: false
}

export default Student;