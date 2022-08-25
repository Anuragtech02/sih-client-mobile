import React, { useContext } from "react";
const StackNavigatorContext = React.createContext({} as any);

export default StackNavigatorContext;

const useStackNavigator = () => {
  const value = useContext(StackNavigatorContext);
  return value;
};

export { useStackNavigator };
