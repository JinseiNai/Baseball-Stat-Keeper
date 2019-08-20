import React from 'react';

class SignupForm extends React.Component {
    state = {
        username: '',
        password: '',
        confirmPassword: ''
    };

    render() {
        return (
            <form>
                <label>
                    Create a username
                    <input type="text"></input>
                </label>
                <label>
                    Create a password
                    <input type="password"></input>
                </label>
                <label>
                    Confirm password
                    <input type="password"></input>
                </label>
            </form>
        );
    }
}

export default SignupForm;