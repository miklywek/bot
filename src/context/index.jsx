import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);
export const AppProvider = ({ children }) => {
  const [stateArray, setStateArray] = useState([]);
  const [botInfo, setBotInfo] = useState({ name: "", messanger: "" });

  const addBotInfo = (botName, botMessanger) => {
    setBotInfo({ name: botName, messanger: botMessanger });
  };
  const addElement = (element) => {
    if (!element.length) {
      return;
    }
    setStateArray([...stateArray, element]);
  };

  return (
    <AppContext.Provider
      value={{ stateArray, botInfo, addElement, addBotInfo }}
    >
      {children}
    </AppContext.Provider>
  );
};
