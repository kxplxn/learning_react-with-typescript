import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from "./Message"

const App = () =>
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Message />
        </header>
    </div>



export default App;
