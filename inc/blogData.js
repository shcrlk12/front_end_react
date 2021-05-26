import editIcon from '../img/edit-icon.svg';
import deleteIcon from '../img/delete-icon.svg';
import { Link } from "react-router-dom";
import axios from 'axios';
import './css/blogData.css';
import {useState, useEffect} from 'react';

export default function BlogData({id, title, data, modify_date, like}){

  const linkPath = '/content/' + id;
  const [likeNum, SetLikeNum] = useState(like);

  const funDelete = () =>
  {
    const isDelete = window.confirm("삭제 하시겠습니까?");

    if(isDelete == true)
    {
      axios({
        method: "POST",
        url : 'http://localhost:8888/delete/blogData',
        data : {
          deleteId : id
        }
      },).then((res)=>{
        console.log(res);
      }).catch((error)=>{
        console.log(error);
      });
    }
  }
  
  const increaseLike = () => {
    SetLikeNum(likeNum + 1);

    axios({
      method: "POST",
      url : 'http://localhost:8888/update/blogLikeNumber',
      data : {
        Id : id,
        like : likeNum + 1
      }
    },).then((res)=>{
      console.log(res);
    }).catch((error)=>{
      console.log(error);
    });

  };

    return (
        <div className = "list">
          <h3> <Link to= {linkPath} className="default-link"><span style={{cursor: "pointer"}}>{title}</span></Link>
           <span style={{cursor: "pointer"}} onClick={increaseLike}> 👍</span> {likeNum}
            <img onClick={()=>{funDelete()}} className = "plusIcon" src = {deleteIcon}/>
            <img onClick={()=>{}} className = "plusIcon" src = {editIcon}/>
          </h3>

          <p>수정일 : {modify_date}</p>
          <hr/>
        </div>
    );
}
