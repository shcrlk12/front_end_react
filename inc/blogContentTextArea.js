/* src/inc/test.js */

import React from 'react';
import './blogContentTextArea.css';
import {useSelector} from 'react-redux';
import axios from 'axios'

export default function BlogContentTextArea({match, location, name}) {

  const state = useSelector((state)=> state);

  function saveData(){
    alert("Save");
  }

  let blogData;
  let index;

  for(var i in state)
  {
    if(state[i].id == match.params.name)
    {
      index = i;
      blogData = state[index].data;
    }
  }

  const funUpdateData = () =>
  {
    const isUpdate = window.confirm("저장 하시겠습니까?");

    if(isUpdate == true)
    {
      axios({
        method: "POST",
        url : 'http://localhost:8888/delete/blogData',
        data : {
          Id : match.params.name,
        }
      },).then((res)=>{
        console.log(res);
      }).catch((error)=>{
        console.log(error);
      });
    }
  }

  return (
      <div>
        <textarea rows ="10" cols="40"defaultValue = {blogData}/>
        <div onClick = {saveData}>save</div>
      </div>
  );
}
