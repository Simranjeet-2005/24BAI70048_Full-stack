import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useAuth();

  // User is not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // User does not have permission
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default ProtectedRoute;