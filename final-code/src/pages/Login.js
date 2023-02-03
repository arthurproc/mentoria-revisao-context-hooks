import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm'
import { AuthContext } from '../context/AuthContext';

function Login() {
  const { isLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn, history]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Login</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login