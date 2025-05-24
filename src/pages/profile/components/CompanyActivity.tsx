import { Card, Empty, Tabs, type TabsProps } from "antd";

const CompanyActivity = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <h6 className="text-[#748a84]">All tasks</h6>,
      children: <Empty />,
    },
    {
      key: "2",
      label: <h6 className="text-[#748a84]">Requests</h6>,
      children: <Empty />,
    },
    {
      key: "3",
      label: <h6 className="text-[#748a84]">Payments</h6>,
      children: <Empty />,
    },
  ];

  return (
    <Card>
      <Tabs defaultActiveKey="1" items={items} />
    </Card>
  );
};

export default CompanyActivity;
