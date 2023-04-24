import { Navigate, Outlet, useLocation } from "react-router-dom";
import { json } from "stream/consumers";

const useAuth = () => {
  let user: any;
  const _user = localStorage.getItem("user");

  if (_user) {
    user = JSON.parse(_user);
    console.log("user", user);
  }else{
    user = ''
  }
  if (user) {
    return {
      auth: true,
      role: user.role,
    };
  } else {
    return {
      auth: false,
      role: null,
    };
  }
};

type ProtectedRouteType = {
  roleRequired?: "ADMIN" | "USER";
};
const ProtectedRoutes = (props: ProtectedRouteType) => {
  const { auth, role } = useAuth();
  const location = useLocation();

  if (props.roleRequired) {
    return auth ? (
      props.roleRequired === role ? (
        <Outlet />
      ) : (
        <Navigate to="/denied"  state={{ from: location }} replace  />
      )
    ) : (
      <Navigate to="/login"  state={{ from: location }} replace  />
    );
  } else {
    return auth ? <Outlet /> : <Navigate to="/login"  state={{ from: location }} replace  />;
  }

  // return auth ? (
  //   <Outlet />
  // ) : (
  //   <Navigate to="/login" state={{ from: location }} replace />
  // );
};

export default ProtectedRoutes;
