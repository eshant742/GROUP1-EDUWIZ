import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PrivateRoute = ({ element: Component }) => {
  const { isloggedin } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isloggedin()) {
      navigate('/login');
    }
  }, [isloggedin, navigate]);

  return isloggedin() ? <Component /> : null;
};

export default PrivateRoute;
