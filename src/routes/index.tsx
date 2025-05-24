import LoginSkeleton from "@components/skeletons/LoginSkeleton";
import useScrollToTop from "@hooks/useScrollToTop";
import { useAuthStore } from "@store/useAuthStore";
import { lazy, Suspense, type JSX } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Login = lazy(() => import("@pages/login"));
const Profile = lazy(() => import("@pages/profile"));
const NotFound = lazy(() => import("@pages/not_found"));

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const user = useAuthStore((s) => s.user);
  return user ? children : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
  useScrollToTop();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<LoginSkeleton />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
