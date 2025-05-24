import { Empty } from "antd";
import PrimaryBtn from "../buttons/PrimaryBtn";
import { useNavigate } from "react-router-dom";

const ProfileDataError = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full mt-[2.5rem] md:mt-[5rem] w-full flex flex-col justify-between items-center">
      <Empty />
      <p className="mb-[2.4rem] text-[#606060] text-[1.4rem] text-center leading-[2.8rem]">
        Unable to load profile information. Kindly login again.
      </p>
      <div>
        <PrimaryBtn onClickFxn={() => navigate("/", { replace: true })}>
          <span className="text-white">Back to login page</span>
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default ProfileDataError;
