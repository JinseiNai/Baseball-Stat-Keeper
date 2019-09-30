import React from 'react';

class LoginButton extends React.Component {
    handleClick = () => {
        console.log('this is:', this);
    }
    render() {
        return (
            <button className="loginBtn" onClick={this.handleClick}>LOG IN</button>
        );
    }
}

export default LoginButton;