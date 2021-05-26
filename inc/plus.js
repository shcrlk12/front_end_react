import './plus.css';
import plusIcon from '../img/add-icon.svg';
import {useDispatch, useSelector} from 'react-redux';
import {addObject, blogTitleChange} from '../redux/blogData';
import axios from 'axios'

function Plus() {

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  function change()
  {
    const titleName = prompt("제목을 입력하세요");

    if(titleName !== '')
    {
      dispatch(addObject());
      dispatch(blogTitleChange(state.length, titleName));

      axios({
        method: "POST",
        url : 'http://localhost:8888/create/blogData',
        data :{
          title : titleName
        }
      },).then((res)=>{
        console.log(res);
      }).catch((error)=>{
        console.log(error);
      });
    }
  }

  return (
    <>
      <div className = "plusIcon2">
        <img onClick={change} className = "plusIcon" src = {plusIcon}/>
      </div>
    </>
  );
}

export default Plus;
