import { useAuthStore } from "@store/useAuthStore";
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const user = useAuthStore((s) => s.userToken);
  return user ? children : <Navigate to="/" replace />;
};

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const user = useAuthStore((s) => s.userToken);
  return user ? <Navigate to="/profile" replace /> : children;
};
