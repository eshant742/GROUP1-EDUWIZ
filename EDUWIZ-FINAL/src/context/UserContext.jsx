import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isloggedin = () => {
    return !!localStorage.getItem('user');
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isloggedin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
