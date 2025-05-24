import Header from "./components/Header";

import ProfileDataError from "@components/errors/ProfileDataError";
import PaymentDateChecker from "../../components/PaymentDateChecker";
import ProfileSkeleton from "../../components/skeletons/ProfileSkeleton";
import CompanyActivity from "./components/CompanyActivity";
import ProfileDisplay from "./components/ProfileDisplay";
import { useAuthStore } from "@store/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { fetchUserApi } from "@api/authApi";
import { useNavigate } from "react-router-dom";
import type { UserProfile } from "@interface/profile.interface";
import { useEffect } from "react";

const Profile = () => {
  const { userToken, logout } = useAuthStore();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery<UserProfile>({
    queryKey: ["userProfile"],
    queryFn: () => fetchUserApi(userToken || ""),
    enabled: !!userToken,
    retry: false,
  });

  useEffect(() => {
    if (isError && (error as any)?.response?.status === 401) {
      logout();
      navigate("/login", { replace: true });
    }
  }, [isError, error]);

  return (
    <div className="bg-[#f5f5f5] min-h-screen p-4 md:p-20">
      {isLoading ? (
        <ProfileSkeleton />
      ) : data ? (
        <>
          <Header fullName={data.full_name} avatar={data.avatar_url} />
          <div className="flex flex-col md:flex-row mt-[3rem] gap-[2.5rem]">
            <div className="w-full md:w-1/2 flex flex-col gap-[2.6rem]">
              <ProfileDisplay user={data} />
              <PaymentDateChecker />
            </div>
            <div className="w-full md:w-1/2 ">
              <CompanyActivity />
            </div>
          </div>
        </>
      ) : (
        isError ?? <ProfileDataError />
      )}
    </div>
  );
};

export default Profile;
