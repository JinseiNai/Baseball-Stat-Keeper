import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
        console.log(this.state.username);
    }

    handleChangePassword(e) {
        this.setState({
            password: e.target.value
        });
        console.log(this.state.password);
    }

    handleSubmit(e) {
        alert('Welcome back ' + this.state.username);
        console.log(this.state.username);
        console.log(this.state.password);
        e.preventDefault();
        this.clearForm();
    }

    clearForm() {
        this.setState({
            username: '',
            password: '',
            confirmPassword: ''
        });
    }

    render() {
        return (
            <div id="loginForm">
                <fieldset>
                    <legend>Log In!</legend>
                    Username:
                    <input type="text" value={this.state.username} onChange={this.handleChangeUsername.bind(this)} />  
                    Password:
                    <input type="password" value={this.state.password} onChange={this.handleChangePassword.bind(this)} />
                    <input type="submit" value="Submit" className="submit" onClick={this.handleSubmit.bind(this)} />
                </fieldset>
            </div>
        );
    }
}

export default LoginForm;