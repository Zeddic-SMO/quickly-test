import { Skeleton } from "antd";

const LoginSkeleton = () => (
  <div className="bg-[#f5f5f5] h-screen flex">
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
      <Skeleton.Avatar active size={64} shape="circle" className="mb-6" />
      <Skeleton.Input
        active
        size="large"
        style={{ width: 240, height: 40, marginBottom: 24 }}
      />
      <Skeleton.Input
        active
        size="small"
        style={{ width: 320, height: 32, marginBottom: 16 }}
      />
      <Skeleton.Input
        active
        size="small"
        style={{ width: 320, height: 32, marginBottom: 16 }}
      />
      <Skeleton.Button
        active
        size="large"
        style={{ width: 320, height: 48, borderRadius: 24, marginTop: 8 }}
      />
    </div>

    <div className="hidden md:flex md:w-1/2 h-screen items-center justify-center">
      <div className="bg-[#171d1b] rounded-2xl w-[90%] h-[85%] flex flex-col justify-center items-start px-16 py-12">
        <Skeleton.Input
          active
          size="large"
          style={{
            width: 380,
            height: 60,
            marginBottom: 24,
            background: "#232826",
          }}
        />
        <Skeleton.Input
          active
          size="large"
          style={{
            width: 320,
            height: 60,
            marginBottom: 16,
            background: "#232826",
          }}
        />
        <Skeleton.Input
          active
          size="large"
          style={{
            width: 260,
            height: 60,
            marginBottom: 32,
            background: "#232826",
          }}
        />
        <div className="flex flex-col gap-4 mt-4">
          <Skeleton.Input
            active
            size="small"
            style={{ width: 320, height: 24, background: "#232826" }}
          />
          <Skeleton.Input
            active
            size="small"
            style={{ width: 320, height: 24, background: "#232826" }}
          />
          <Skeleton.Input
            active
            size="small"
            style={{ width: 320, height: 24, background: "#232826" }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default LoginSkeleton;
