/* src/inc/test.js */

import React, { useState } from 'react';
import './blogContents.css';
import axios from 'axios'
import editIcon from '../img/edit-icon.svg';
import deleteIcon from '../img/delete-icon.svg';

function BlogContents({data}) {

  let [text, setText] = useState([]);
  let [제목클릭, 제목클릭변경] = useState([]);

  function 제목클릭변경2(index)
  {
    let temp = [...제목클릭];
    temp[index] = temp[index] ? 0 : 1;
    제목클릭변경(temp);
  }

  const menuList = data.map((data, index) => (
    <div key={index} className = "list">
      <h3> <span style={{cursor: "pointer"}} onClick={()=>{제목클릭변경2(index);
         console.log(제목클릭)}}>{data.title}</span>
        <span style={{cursor: "pointer"}} onClick={()=>{alert("업데이트 예정")}}> 👍</span> {data.like}
        <img onClick={()=>{alert("업데이트 예정")}} className = "plusIcon" src = {deleteIcon}/>
        <img onClick={()=>{alert("업데이트 예정")}} className = "plusIcon" src = {editIcon}/>
      </h3>
      {
        제목클릭[index] === 1 && <div>{data.data}</div>
      }
      <p>{data.modify_date}</p>
      <hr/>
    </div>
  ));

  if(data.length > 0)
  {
    return (
        <div>
          // {menuList}
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
