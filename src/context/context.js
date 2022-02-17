import React, { useContext, useReducer } from 'react';
import reducer from '../Reducer/reducer';

const AppContext = React.createContext();
const initialState = { iscontactOpen: false };

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contactOpen = () => {
    dispatch({ type: 'GET_CONTACT_OPEN' });
  };
  const contactClose = () => {
    dispatch({ type: 'GET_CONTACT_CLOSE' });
  };
  return (
    <AppContext.Provider value={{ ...state, contactOpen, contactClose }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
