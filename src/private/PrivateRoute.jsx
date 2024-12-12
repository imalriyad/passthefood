import { Spinner } from "@nextui-org/react";
import { Navigate } from "react-router-dom";
import useAllContext from "../hooks/UseAllContext";

const PrivateRoute = ({ children }) => {
  const { isLoading, user } = useAllContext();

  if (!user && isLoading) {
    return (
      <div className="max-w-xs py-28 mx-auto text-center max-h-screen">
        {" "}
        <Spinner color="warning" size="lg" label="Loading..." />
      </div>
    );
  }

  if (user && user.emailVerified) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
