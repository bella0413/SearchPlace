import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Subject from "./components/Subject";
import Hello from "./components/Hello";



function App() {
  const subject = "react"; 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, {subject}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Subject title="Nice" content="hahahaha success"/>
      <Hello />
      <Hello></Hello>
      <Subject></Subject>
    </div>

  );
}

export default App;
