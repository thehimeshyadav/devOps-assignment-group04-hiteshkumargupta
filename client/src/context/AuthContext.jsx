// ─────────────────────────────────────────
//  Auth Context — Global User State
// ─────────────────────────────────────────
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Initialize from localStorage so user stays logged in on refresh
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user')) || null;
    } catch {
      return null;
    }
  });

  // Called after successful login/register
  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  // Called on logout
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  // Called after profile update to sync local state
  const updateUser = (updatedFields) => {
    const merged = { ...user, ...updatedFields };
    localStorage.setItem('user', JSON.stringify(merged));
    setUser(merged);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy consumption
export const useAuth = () => useContext(AuthContext);
