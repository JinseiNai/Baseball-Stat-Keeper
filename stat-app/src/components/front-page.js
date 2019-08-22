import React from 'react';
import logo from './images/baseball.png';
import LoginButtons from './login-buttons';

class FrontPage extends React.Component {
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

    handleClick() {
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
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>
                        Stat Tracker
                    </h1>
                    <div id="content">
                        <LoginButtons onClick={this.handleClick.bind(this)}/>
                    </div>
                </header>
            </div>
        );
    }
}

export default FrontPage;