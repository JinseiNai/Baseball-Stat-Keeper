import React from 'react';
import logo from '../images/baseball.png';
import LoginButton from './login-button';
import SignupButton from './signup-button';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBtnClicked: false
        }
    }

    componentWillUnmount() {
        let btn = document.getElementById('content');
        btn.innerHTML='';
    }

    handleClick = () => {
        this.setState({
            isBtnClicked: true
        })
        console.log('btn is clicked');
    }

    render() {
        if (this.state.isBtnClicked) {
            this.componentWillUnmount();
        }

        return (
            <div className="HomePage">
                <h1 id="Title">Stat Tracker</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <div id="homePageBtns">
                    <Link to="/login">
                        <LoginButton onClick={this.handleClick} className="loginBtn" />
                    </Link>
                    <Link to="/signup">
                        <SignupButton onClick={this.handleClick} className="signupBtn" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default HomePage;