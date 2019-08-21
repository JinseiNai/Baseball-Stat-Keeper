import React from 'react';

class LoginButtons extends React.Component {
    render() {
        return (
            <div className="loginControl">
                <button className="loginBtn">LOG IN</button>
                <button className="signupBtn">SIGN UP</button>
            </div>
        );
    }
}

export default LoginButtons;