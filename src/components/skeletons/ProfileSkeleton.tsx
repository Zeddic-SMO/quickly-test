import { Skeleton } from "antd";

const ProfileSkeleton = () => (
  <div className="bg-[#f5f5f5] min-h-screen p-8">
    <div className="bg-[#171d1b] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between mb-8">
      <div>
        <Skeleton.Input
          active
          size="large"
          style={{ width: 220, height: 32, marginBottom: 8 }}
        />
        <Skeleton.Input
          active
          size="small"
          style={{ width: 120, height: 20 }}
        />
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <Skeleton.Button
          active
          size="large"
          style={{ width: 120, borderRadius: 9999 }}
        />
        <Skeleton.Button
          active
          size="large"
          style={{ width: 80, borderRadius: 9999 }}
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
      <div className="flex flex-col gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <Skeleton
            active
            title={{ width: 180 }}
            paragraph={{ rows: 3, width: ["60%", "80%", "70%"] }}
          />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <Skeleton
            active
            title={{ width: 220 }}
            paragraph={{ rows: 2, width: ["90%", "80%"] }}
          />
          <div className="bg-[#f5f5f5] rounded-lg p-6 mt-4">
            <div className="flex gap-4">
              <Skeleton.Input
                active
                size="large"
                style={{ width: "100%", marginBottom: 8 }}
              />
              <Skeleton.Input active size="large" style={{ width: "100%" }} />
            </div>
            <Skeleton paragraph={{ rows: 1, width: "60%" }} active />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white rounded-lg shadow p-6 h-full flex flex-col overflow-hidden">
          <div className="border-b pb-4 mb-4">
            <div className="flex gap-8">
              <Skeleton.Input active size="small" style={{ width: 80 }} />
              <Skeleton.Input active size="small" style={{ width: 80 }} />
              <Skeleton.Input active size="small" style={{ width: 80 }} />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <Skeleton.Avatar active size={64} shape="square" />
            <Skeleton.Input
              active
              size="small"
              style={{ width: 80, marginTop: 16 }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileSkeleton;
