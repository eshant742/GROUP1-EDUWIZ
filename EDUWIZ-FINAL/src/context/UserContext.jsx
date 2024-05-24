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
    console.log("Logging out..."); // Debugging: log before clearing user state
    setUser(null);
    localStorage.removeItem('user');
    console.log("User state cleared and localStorage cleaned"); // Debugging: log after clearing
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
