import React from 'react';
import logo from './images/baseball.png';
import './App.css';
import LoginForm from './login-form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Sports Stat Keeper
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          LOG IN
        </a>
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
