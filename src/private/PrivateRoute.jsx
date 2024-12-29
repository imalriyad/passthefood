import { Spinner } from "@nextui-org/react";
import { Navigate } from "react-router-dom";
import useAllContext from "../hooks/UseAllContext";

const PrivateRoute = ({ children }) => {
  const { isLoading, user } = useAllContext();
 
  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Spinner color="warning" size="lg" label="Checking authentication..." />
      </div>
    );
  }

  if (user) {
    return children
  }
  return <Navigate to={'/Login'}></Navigate>;
};


export default PrivateRoute;
