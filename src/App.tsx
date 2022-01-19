import React from 'react';
import logo from './logo.svg';
import './App.css';
import TelegramLoginButton from 'react-telegram-login'

function App() {
  const testbotbot = (response: any) => {
    console.log(response)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <TelegramLoginButton dataOnauth={testbotbot} botName="danhsucowboybot" />
        </div>
      </header>
    </div>
  );
}

export default App;

