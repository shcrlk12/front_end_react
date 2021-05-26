/* src/inc/test.js */

import React, {useEffect, useState} from 'react';
import './blogContentTextArea.css';
import {useSelector} from 'react-redux';
import axios from 'axios'

export default function BlogContentTextArea({match, location, name}) {

  const [blogContent, setBlogContent] = useState('');
  const state = useSelector((state)=> state);

  function saveData(){
    alert("Save");
  }

  useEffect(()=>{
    for(var i in state)
    {
      if(state[i].id == match.params.name)
      {
        let index;

        index = i;
        setBlogContent(state[index].data);
      }
    }
  },[]);

  const funUpdateData = () =>{
    const isUpdate = window.confirm("저장 하시겠습니까?");

    if(isUpdate == true)
    {
      
      axios({
        method: "POST",
        url : 'http://localhost:8888/update/blogData',
        data : {
          Id : match.params.name,
          data : blogContent
        }
      },).then((res)=>{
        console.log(res);
      }).catch((error)=>{
        console.log(error);
      });
    }
  }

  const textChange = (e) =>{
    setBlogContent(e.target.value);
  };

  return (
      <div>
        <textarea rows ="10" cols="40" defaultValue = {blogContent} onChange = {textChange}/>
        <div onClick = {funUpdateData}>save</div>
      </div>
  );
}
