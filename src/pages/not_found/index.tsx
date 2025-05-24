import PrimaryBtn from "@components/buttons/PrimaryBtn";
import { Empty } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="p-[2rem] flex flex-col justify-center items-center h-screen max-w-[74.4rem] text-center mx-auto">
      <Empty description={false} />
      <h1 className="leading-[4.4rem] text-[3rem] font-bold mt-[1rem]">
        Sorry! This page isn&apos;t available.
      </h1>
      <p className="mb-[2.4rem] text-[#606060] text-[1.4rem] leading-[2.8rem]">
        The link may be broken or the page may have been removed.
      </p>
      <div>
        <PrimaryBtn onClickFxn={() => navigate("/", { replace: true })}>
          <span className="text-white">Back to Homepage</span>
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default NotFound;
