//Don't forget to pass in the props to the function component
import PropTypes from 'prop-types';

function UserGreeting(props) {
    if (props.isLoggedIn) {
        return (
            <>
            <p>Welcome {props.username}!</p>
            <hr />
            </>
        )
    }

    else {
        return (
            <>
            <p>Please log in</p>
            <hr/>
            </>
        )
    }

}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting;