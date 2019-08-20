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
            <form id="loginForm">
                <label>
                    Username:
                    <input type="text" value={this.state.username} onChange={this.handleChangeUsername.bind(this)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={this.state.password} onChange={this.handleChangePassword.bind(this)} />
                </label>
                <input type="submit" value="Submit" onClick={this.handleSubmit.bind(this)} />
            </form>
        );
    }
}

export default LoginForm;