import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import HomePage from './components/home-page';
import LoginForm from './components/login-form';
import SignupForm from './components/signup-form';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <div className="App App-background">
            <Route exact path="/" component={HomePage} />
            <Route path="/login" render={() => <LoginForm />} />
            <Route path="/signup" render={() => <SignupForm />} />

          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
