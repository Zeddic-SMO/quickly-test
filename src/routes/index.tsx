import LoginSkeleton from "@components/skeletons/LoginSkeleton";
import useScrollToTop from "@hooks/useScrollToTop";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./RouteGuards";

const Login = lazy(() => import("@pages/login"));
const Profile = lazy(() => import("@pages/profile"));
const NotFound = lazy(() => import("@pages/not_found"));

const AppRoutes = () => {
  useScrollToTop();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Suspense fallback={<LoginSkeleton />}>
              <Login />
            </Suspense>
          </PublicRoute>
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
