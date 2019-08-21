import React from 'react';
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
      <FrontPage />
    );
  }
}

export default App;
