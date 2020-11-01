/*global kakao*/

import './App.css';
import React, {Component} from 'react';
import Subject from "./components/Subject";
import Intro from "./components/Intro";


import MapContainer from "./components/MapContainer";
import SearchPlace from "./components/SearchPlace";


function App() {
  const subject = "react"; 

  return (
    <div className="App">
      <header className="App-header">
      🗺 이곳저곳 🗺 
      </header>
      <div style={{
        height: '4rem',
      }}>
      <Intro className="btn"></Intro>
      </div>
      <div className="content">
      <SearchPlace></SearchPlace>
      </div>
    </div>

  );
}

export default App;
