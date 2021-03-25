import React, { useState, useEffect, createContext, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useCartContext } from '../context/cart_context';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { user, loginWithRedirect, logout, isLoading } = useAuth0();
  const { deleteCart } = useCartContext();

  const [loggedUser, setLoggedUser] = useState(null);

  const logoutUser = async () => {
    deleteCart();
    await logout();
  };

  useEffect(() => {
    setLoggedUser(user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        loginWithRedirect,
        logoutUser,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider };
