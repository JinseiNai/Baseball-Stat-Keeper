import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form>
                <label>
                    Username:
                    <input type="text" value={this.state.username} onChange={this.handleChange} />
                </label>
                <label>
                    Password:
                    <input type="password" value={this.state.password} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default LoginForm;