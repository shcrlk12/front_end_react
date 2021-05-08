import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './inc/home.js';
import Test from './inc/test.js';
import axios from 'axios'
function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 맛집']); // 2개의 데이터가 들어가는 array 가 생성됨 [a,b] a : 저 데이터  b: 저 ㅎ마수를 수정하기 위한 함수가 들어감
  let posts = '강남 고기 맛집';
  let [따봉, 따봉변경] = useState(0);

 // function render() {
 //   return(
 //     <div className='App'>
 //       <BrowserRouter>
 //         <Link to="/test">소개</Link>
 //         <Route path="/" component={Home} />
 //         <Route path="/test" component={Test} />
 //       </BrowserRouter>
 //     </div>
 //   );
 // }
axios.get('http://localhost:8888/users').then((Response)=>{
    console.log(Response.data);
}).catch((Error)=>{
    console.log(Error);
})
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className = "list">
        <h3> {posts} <span onClick={()=>{따봉변경(따봉 + 1);}}>👍</span> {따봉} </h3>

        <p> 2월 17일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3> {글제목[0]} </h3>
        <p> 2월 17일 발행</p>
        <hr/>
      </div>
      <BrowserRouter>
        <Link to="/">home </Link>
        <Link to="/test">test</Link>
        <Route path="/" component={Home} exact/>
        <Route path="/test" component={Test} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
