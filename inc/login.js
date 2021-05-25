import './login.css';

function Login() {

  return (
    <>
      <div className = 'form4'>
        <form action='http://localhost:8888/users/login' method='get'>
          <span className = 'form1'>
            <span className = 'form2'>아이디</span><input name='id'/>
            <br/>
            <span className = 'form2'>패스워드</span><input type='password' name='pass'/>
          </span>
          <div>
            <input  className='form3' type = 'submit' value='로그인'/>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
