import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Header() {
  const { user, isLoggedIn, logoutUser } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-light bg-light">
    {
      isLoggedIn && (
        <>
          <Link className="navbar-brand" to="/">TryBlog</Link>
          <div className="form-inline">
            <p>{user.name}</p>
            <Link className="btn btn-outline-success my-2 my-sm-0" to="/profile">Profile</Link>
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              onClick={ logoutUser }
            >
              Logout
            </button>
          </div>
        </>
      )
    }
    </nav>
  )
}

export default Header