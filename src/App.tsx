import React from 'react';
import logo from './logo.svg';
import './App.css';
import TelegramLoginButton from 'react-telegram-login'

function App() {
  const testbotbot = (response: any) => {
    console.log(response)
  }

  function onTelegramAuth(user:any) {
    alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
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
          <TelegramLoginButton dataOnauth={testbotbot} botName="danhsucowboybot">
            <button style={{width: '240px', height: '36px', backgroundColor: '#1D77FF', border:'none', borderRadius:'16px', color: '#FFFFFF'}}>LOG-IN WITH TELEGRAM</button>
          </TelegramLoginButton>
        </div>
        <div>
          <script async src="https://telegram.org/js/telegram-widget.js?15" data-telegram-login="danhsucowboybot" data-size="large" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>
        </div>
      </header>
    </div>
  );
}

export default App;

