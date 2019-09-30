import React from 'react';

class SignupButton extends React.Component {
    handleClick = () => {
        console.log('this is:', this);
    }

    render() {
        return(
            <button className="signupBtn" onClick={this.handleClick}>SIGN UP</button>
        )
    }
}

export default SignupButton;