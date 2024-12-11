import { useContext } from "react";
import { AllContext } from "../context/ContextProvider";


const useAllContext = () => {

  const authInfo  = useContext(AllContext)
  return authInfo
};

export default useAllContext;