import { useState } from 'react';
import { login } from '../services/auth';
import { edit } from '../services/user';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginUser = async (email, password) => {
    setLoading(true);
    const userData = await login({ email, password });
    setUser(userData);
    setLoading(false);
  };

  const logoutUser = () => {
    setUser(null);
  };

  const editUser = async (newUserData) => {
    setLoading(true);
    await edit(user.id, { ...user ,...newUserData });
    setUser({ ...user, ...newUserData });
    setLoading(false);
  };


  return { user, loading, loginUser, logoutUser, editUser };
}

export default useAuth;