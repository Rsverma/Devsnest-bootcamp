import React, {useState,useCallback,createContext} from 'react';

export const LoginContext = createContext();

const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
  
    const toggle = useCallback(() => setState((state) => !state), []);
  
    return [state, toggle];
  };
  
export const LoginProvider = props => {
    const [isLoggedIn, SetIsLoggedIn] = useToggle();
    return <LoginContext.Provider value={[isLoggedIn, SetIsLoggedIn]}>
        {props.children}
    </LoginContext.Provider>
}