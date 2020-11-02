/*global kakao*/

import './App.css';
import React, {Component} from 'react';
import Intro from "./components/Intro";
import MemoTemplate from "./components/MemoTemplate";
import SearchPlace from "./components/SearchPlace";
import MemoHead from "./components/MemoHead";
import MemoList from './components/MemoList';
import MemoCreate from './components/MemoCreate';

function App() {
  const subject = "react"; 

  return (
    <div className="App">
      <header className="App-header">
      🗺 이곳저곳 🗺 
      </header>
      <div className="intro">
      <Intro className="btn"></Intro>
      </div>

      <div className="content clearfix">
      
      <div className="left-item">
      <SearchPlace></SearchPlace>
      </div>

      <div className="right-item">
      <MemoTemplate>
        <MemoHead></MemoHead>
        <MemoList></MemoList>
        <MemoCreate></MemoCreate>
      </MemoTemplate>
      </div>

      </div>
    </div>

  );
}

export default App;
