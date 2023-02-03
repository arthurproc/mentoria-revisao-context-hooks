import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import useProtectedRoute from '../hooks/useProtectedRoute';
import '../styles/Profile.css';

function Profile() {
  const { user, editUser, isLoggedIn, loading } = useContext(AuthContext);
  const [editUserInput, setEditUserInput] = useState({
    name: user?.name ?? '',
    email: user?.email ?? '',
    bio: user?.bio ?? '',
  });
  const [edit, setEdit] = useState(false);
  useProtectedRoute();

  if (!isLoggedIn) return null;
  
  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div className="card p-4">
        <div className=" image d-flex flex-column justify-content-center align-items-center">
          <button className="btn btn-secondary">
            <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" alt="profile" />
          </button>
          { edit && (
            <div className="mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nome"
                value={ editUserInput.name }
                onChange={ (e) => setEditUserInput({ ...editUserInput, name: e.target.value }) }
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Email"
                value={ editUserInput.email }
                onChange={ (e) => setEditUserInput({ ...editUserInput, email: e.target.value }) }
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Bio"
                value={ editUserInput.bio }
                onChange={ (e) => setEditUserInput({ ...editUserInput, bio: e.target.value }) }
              />
              <button
                className="btn btn-dark mt-2"
                onClick={ () => {
                  setEdit(false);
                  editUser(editUserInput);
                } }
              >
                Salvar
              </button>
            </div>
          ) }
          <span className="name mt-3">{ user.name }</span>
          <span className="idd">{ user.email }</span>
          <div className=" d-flex mt-2">
            <button className="btn btn-dark" onClick={ () => setEdit(true) }>Edit Profile</button>
          </div>
          <div className="text mt-3">
            <span>
              {
                user.bio
              }
            </span>
          </div>
          <div className=" px-2 rounded mt-4 date ">
            <span className="join">{ `Criou a conta em: ${new Date(user.createdAt).toLocaleDateString()}` }</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile