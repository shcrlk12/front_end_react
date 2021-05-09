import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './inc/home.js';
import BlogContents from './inc/blogContents.js';
import plusIcon from './img/add-icon.svg';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="black-nav">
          <div className= "blogTitle"><Link to="/" className="default-link">Jeongwon Blog</Link></div>
        </div>
        <div className = "plusIcon2">
          <img onClick={()=>{alert("업데이트 예정")}} className = "plusIcon" src = {plusIcon}/>
        </div>
        <BlogContents/>
      <MyName name="리액트" />
      </BrowserRouter>
    </div>
  );
}


const MyName = ({ name }) => {
  return (
    <div>
      안녕하세요! 제 이름은 {name} 입니다.
    </div>
  );
};

export default App;
