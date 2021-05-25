import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from './inc/login.js';
import BlogContents from './inc/blogContents.js';
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import {addObject, blogDataChange, blogTitleChange, blogIdChange} from './redux/blogData';
import Header from './inc/header';
import BlogData from './container/blogData';
import Plus from './inc/plus';
import BlogContentTextArea from './inc/blogContentTextArea.js'

function App() {
  let [블로그데이터, 블로그데이터변경] = useState([]);
  let [text, setText] = useState([]);
  let [제목클릭, 제목클릭변경] = useState([]);
  let [loginToken, setLoginToken] = useState([]);

  const dispatch = useDispatch();
  const state = useSelector((state)=> state);

  useEffect(()=>{
    axios.get('http://localhost:8888/read/blogData')
    .then((Response)=>{

      for(let i in Response.data)
      {
        dispatch(addObject());
        dispatch(blogDataChange(i, Response.data[i]._data));
        dispatch(blogTitleChange(i, Response.data[i]._title));
        dispatch(blogIdChange(i, Response.data[i]._id));
      }

        console.log(Response);

    })
    .catch((Error)=>{
        console.log(Error);
    })
  },[]);
  var Id;

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Route path="/" component={Plus} exact/>
        <Route path="/" component={BlogData} exact/>
        <Route path="/content/:name" component={BlogContentTextArea}/>

      </BrowserRouter>
    </div>
  );
}

export default App;
