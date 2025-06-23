import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

const PrivateRoute = () => {
  const { logado } = useContext(AuthContext);
  
  return logado 
    ? <Outlet /> 
    : <Navigate to="/login" />;
};

export default PrivateRoute;
