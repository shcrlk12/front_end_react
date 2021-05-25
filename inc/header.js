import './css/header.css';
import { Link } from 'react-router-dom';

export default function Header(){
  return(
  <>
    <div className="black-nav">
      <div className= "blogTitle">
        <Link to="/" className="default-link">Jeongwon Blog</Link>
      </div>
    </div>
  </>
);
}
