import type { UserProfile } from "@interface/profile.interface";
import { Card } from "antd";

const ProfileDisplay: React.FC<{ user: UserProfile }> = ({ user }) => {
  return (
    <Card title="User Information">
      <div className="space-y-4">
        <div>
          <h6 className="text-[#748a84]">Name:</h6>
          <p> {user.full_name}</p>
        </div>
        <div>
          <h6 className="text-[#748a84]">Email:</h6>
          <p>{user.email}</p>
        </div>
        <div>
          <h6 className="text-[#748a84]">Business Name:</h6>
          <p> {user.Company.name}</p>
        </div>
        <div>
          <h6 className="text-[#748a84]">Company Expected Activity:</h6>
          <p> {user.Company.expected_activity}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProfileDisplay;
