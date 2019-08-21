import React from 'react';

class SignupForm extends React.Component {
    state = {
        username: '',
        password: '',
        confirmPassword: ''
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

    handleChangeConfirmPassword(e) {
        this.setState({
            confirmPassword: e.target.value
        });
        console.log(this.state.confirmPassword);
    }

    clearForm() {
        this.setState({
            username: '',
            password: '',
            confirmPassword: ''
        });
    }

    handleSubmit(e) {
        if (this.state.password === this.state.confirmPassword) {
            alert(this.state.username + ', your account has been created!');
            console.log('username: ' + this.state.username);
            console.log('password: ' + this.state.password);
        } else {
            alert('passwords do not match');
            console.log('First password: ' + this.state.password);
            console.log('Second password: ' + this.state.confirmPassword);
        }
        e.preventDefault();
        this.clearForm();
    }

    render() {
        return (
            <fieldset id="signupForm">
                <label>
                    Create a username
                    <input type="text" value={this.state.username} onChange={this.handleChangeUsername.bind(this)} />
                </label>
                <label>
                    Create a password
                    <input type="password" value={this.state.password} onChange={this.handleChangePassword.bind(this)} />
                </label>
                <label>
                    Confirm password
                    <input type="password" value={this.state.confirmPassword} onChange={this.handleChangeConfirmPassword.bind(this)} />
                </label>
                <input type="submit" value="Submit" onClick={this.handleSubmit.bind(this)} />
            </fieldset>
        );
    }
}

export default SignupForm;