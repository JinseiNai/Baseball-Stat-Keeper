import React from 'react';

class LoginForm extends React.Component {
    state = {
        username: '',
        password: ''
    };

    render() {
        return (
            <form>
                <label>
                    Username:
                    <input type="text" placeholder="Username"></input>
                </label>
                <label>
                    Password:
                    <input type="password"></input>
                </label>
            </form>
        );
    }
}

export default LoginForm;