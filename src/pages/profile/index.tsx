import { useEffect, useState } from "react";
import Header from "./components/Header";

import ProfileDataError from "@components/errors/ProfileDataError";
import type { UserProfile } from "@interface/profile";
import { message } from "antd";
import CompanyActivity from "./components/CompanyActivity";
import PaymentDateChecker from "../../components/PaymentDateChecker";
import ProfileDisplay from "./components/ProfileDisplay";
import ProfileSkeleton from "../../components/skeletons/ProfileSkeleton";

const fetchUserProfile = async (): Promise<UserProfile> => {
  // Simulate API call with provided data
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          full_name: "Brendan Koch",
          email: "brendan+dev@helloquickly.com",
          phone: "4039888585",
          roles: "approver",
          verified: true,
          Company: {
            name: "B Co.",
            address_line_1: "838 11 Ave SW",
            address_line_2: "202",
            address_city: "Calgary",
            address_state: "Alberta",
            address_zip: "T2R 0E5",
            address_country: "Canada",
            default_currency: "cad",
          },
        }),
      1000
    )
  );
};

const Profile = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserProfile()
      .then(setUser)
      .catch(() => message.error("Failed to load profile"))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="bg-[#f5f5f5] min-h-screen p-4 md:p-20">
      {loading ? (
        <ProfileSkeleton />
      ) : user ? (
        <>
          <Header user={user} />
          <div className="flex flex-col md:flex-row mt-[3rem] gap-[2.5rem]">
            <div className="w-full md:w-1/2 flex flex-col gap-[2.6rem]">
              <ProfileDisplay user={user} />
              <PaymentDateChecker />
            </div>
            <div className="w-full md:w-1/2 ">
              <CompanyActivity />
            </div>
          </div>
        </>
      ) : (
        <ProfileDataError />
      )}
    </div>
  );
};

export default Profile;
