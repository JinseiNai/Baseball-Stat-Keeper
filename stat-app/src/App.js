import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import FrontPage from './front-page';
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

        </Switch>
      </Router>
    );
  }
}

export default App;
