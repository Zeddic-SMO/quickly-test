import { useEffect, useState } from "react";
import Header from "./components/Header";

import type { UserProfile } from "@interface/profile";
import { message } from "antd";
import ProfileDisplay from "./components/ProfileDisplay";
import PaymentDateChecker from "./components/PaymentDateChecker";

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
    <div className="bg-[#f5f5f5] h-screen p-20">
      <Header />

      <div className="flex mt-[3rem] gap-[2.5rem]">
        <div className="w-full md:w-1/2">
          {user && <ProfileDisplay user={user} />}
        </div>

        <div className="w-full md:w-1/2">
          <PaymentDateChecker />
        </div>
      </div>
    </div>
  );
};

export default Profile;
