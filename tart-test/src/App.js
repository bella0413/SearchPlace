/*global kakao*/
import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Subject from "./components/Subject";
import Hello from "./components/Hello";
import MapContainer from "./components/MapContainer";
import SearchPlace from "./components/SearchPlace";


function App() {
  const subject = "react"; 

  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Subject title="Nice" content="hahahaha success"/>
      <Hello />
      <Hello></Hello>
      <Subject></Subject>
      {/* <SearchPlace></SearchPlace> */}
      <h1 style={{
            color: 'skyblue',}}>우리동네 이곳저곳</h1>
      <MapContainer></MapContainer>
    </div>

  );
}

export default App;
