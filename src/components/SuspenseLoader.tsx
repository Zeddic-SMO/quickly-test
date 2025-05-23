import { Spin } from "antd";

const SuspenseLoader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Spin tip="Loading">
        <div className="p-10" />
      </Spin>
    </div>
  );
};

export default SuspenseLoader;
