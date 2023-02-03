import React from 'react';
import useAuth from '../hooks/useAuth';

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const { user, loading, loginUser, logoutUser, editUser } = useAuth();
  const isLoggedIn = !!user;
  return (
    <AuthContext.Provider value={{ user, loading, loginUser, logoutUser, editUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider