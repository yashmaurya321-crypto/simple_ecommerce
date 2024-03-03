// UserContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const updateUser = (data) => {
    setUserData(data);
    console.log('Data is set'); 
  };

  return (
    <UserContext.Provider value={{ userData, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
