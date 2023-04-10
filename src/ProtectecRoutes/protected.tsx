import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  if (!localStorage.getItem("Token")) {
    return false;
  } else {
    return true;
  }
};
const ProtectedRoutes = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
