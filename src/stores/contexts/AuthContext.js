import { createContext, useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();

const AuthContextProvider = (children) => {
  const [authState, dispatch] = useReducer(AuthReducer, {
    total: 0,
  });

  // methods...
  const login = (payload) => {
    // ...
  };

  const data = {
    total: 0,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
