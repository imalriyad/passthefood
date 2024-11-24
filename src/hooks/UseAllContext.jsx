import { useContext } from "react";
import { AllContext } from "../context/ContextProvider";


const UseAllContext = () => {
  const authInfo  = useContext(AllContext)
  return authInfo
};

export default UseAllContext;