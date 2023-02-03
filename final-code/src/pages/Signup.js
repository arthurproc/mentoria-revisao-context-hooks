import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { signup } from '../services/auth';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== password2) {
        setError({ message: 'Passwords do not match' });
      }
      else {
        await signup({ email, password });
        history.push('/login');
      }
    }
    catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    setError(null);
  }, [email, password, password2]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Signup</h1>
          <form onSubmit={ handleSubmit }>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={(e) => setPassword2(e.target.value)}
                id="password2"
              />
            </div>
            {error && <div className="alert alert-danger">{error.message}</div>}
            <button type="submit" className="btn btn-primary mt-2">
              Signup
            </button>
            <Link to="/login" className="btn btn-link mt-2">Já tem uma conta? Faça login</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup