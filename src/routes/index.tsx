import useScrollToTop from "@hooks/useScrollToTop";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("@pages/login"));
const Profile = lazy(() => import("@pages/profile"));
const NotFound = lazy(() => import("@pages/not_found"));

const AppRoutes = () => {
  useScrollToTop();
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
