import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if(!user){
    return <Navigate to="/signin" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
