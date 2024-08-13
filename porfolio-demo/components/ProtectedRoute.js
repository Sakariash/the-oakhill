// components/ProtectedRoute.js
import { useState } from 'react';
import LoginPage from './LoginPage';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <LoginPage onLogin={setIsAuthenticated} />;
  }

  return children;
};

export default ProtectedRoute;
