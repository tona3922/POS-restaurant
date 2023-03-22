import { createContext, useReducer } from 'react';
import { AuthReducer } from '../reducers/AuthReducer';

export const AuthContext = createContext();

const AuthContextProvider = (children) => {
  const [authState, dispatch] = useReducer(AuthReducer, {
    user: undefined,
  });

  // methods...
  const login = (payload) => {
    // ...
  }

  const data = {
    authState,
    login
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;