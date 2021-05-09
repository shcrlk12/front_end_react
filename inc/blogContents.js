/* src/inc/test.js */

import React, { useState } from 'react';
import './blogContents.css';
import axios from 'axios'
import editIcon from '../img/edit-icon.svg';
import deleteIcon from '../img/delete-icon.svg';

function BlogContents() {

  let [text, setText] = useState([]);
  let [제목클릭, 제목클릭변경] = useState([]);

  function 제목클릭변경2(index)
  {
    let temp = [...제목클릭];
    temp[index] = temp[index] ? 0 : 1;
    제목클릭변경(temp);
  }

  if(text.length == 0)
  {
    axios.get('http://localhost:8888/users')
    .then((Response)=>{
        console.log(Response.data);
        setText(Response.data);
    })
    .catch((Error)=>{
        console.log(Error);
    })
  }

  const menuList = text.map((text, index) => (
    <div key={index} className = "list">
      <h3> <span style={{cursor: "pointer"}} onClick={()=>{제목클릭변경2(index);}}>{text.title}</span>
        <span style={{cursor: "pointer"}} onClick={()=>{alert("업데이트 예정")}}> 👍</span> {text.like}
        <img onClick={()=>{alert("업데이트 예정")}} className = "plusIcon" src = {deleteIcon}/>
        <img onClick={()=>{alert("업데이트 예정")}} className = "plusIcon" src = {editIcon}/>
      </h3>
      {
        1 === 제목클릭[index] && <div>{text.data}</div>
      }
      <p>{text.modify_date}</p>
      <hr/>
    </div>
  ));

  if(text.length > 0)
  {
    return (
        <div>
          {menuList}
        </div>
    );
  }
  else
  {
    return (
        <div>
          <h3></h3>
        </div>
    );
  }
}


export default BlogContents;
