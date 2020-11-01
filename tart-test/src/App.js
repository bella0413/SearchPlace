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
      <header className="App-header">
        우리동네 이곳저곳
      </header>
      <Hello />
      <Subject></Subject>
      <SearchPlace></SearchPlace>
      <MapContainer></MapContainer>
    </div>

  );
}

export default App;
