import type { UserProfile } from "@interface/profile";
import { Card } from "antd";
import { User } from "iconsax-reactjs";

const ProfileDisplay: React.FC<{ user: UserProfile }> = ({ user }) => {
  return (
    <Card title="Profile">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white">
        <div className="bg-[#f5f5f5] rounded-full p-6 mb-4 shadow w-[10.2rem]">
          <User size={72} color="#171d1b" variant="Bold" />
        </div>
        <div>
          <h6 className="text-[#748a84]">Full Name</h6>
          <div
            className="text-[1.6rem] font-medium"
            style={{ color: "#171d1b" }}
          >
            {user.full_name}
          </div>
        </div>

        <div>
          <h6 className="text-[#748a84]">Email</h6>
          <div
            className="text-[1.6rem] font-medium"
            style={{ color: "#171d1b" }}
          >
            {user.email}
          </div>
        </div>

        <div>
          <h6 className="text-[#748a84]">Phone</h6>
          <div
            className="text-[1.6rem] font-medium"
            style={{ color: "#171d1b" }}
          >
            {user.phone}
          </div>
        </div>

        <div>
          <h6 className="text-[#748a84]">Role</h6>
          <div
            className="text-[1.6rem] font-medium capitalize"
            style={{ color: "#171d1b" }}
          >
            {user.roles}
          </div>
        </div>

        <div>
          <h6 className="text-[#748a84]">Company</h6>
          <div
            className="text-[1.6rem] font-medium"
            style={{ color: "#171d1b" }}
          >
            {user.Company.name}
          </div>
        </div>

        <div className="md:col-span-2">
          <h6 className="text-[#748a84]">Company Address</h6>
          <div
            className="text-[1.6rem] font-medium"
            style={{ color: "#171d1b" }}
          >
            {user.Company.address_line_1}
            {user.Company.address_line_2 &&
              `, ${user.Company.address_line_2}`}, {user.Company.address_city},{" "}
            {user.Company.address_state}, {user.Company.address_zip},{" "}
            {user.Company.address_country}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileDisplay;
