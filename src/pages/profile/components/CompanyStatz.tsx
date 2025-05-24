import { Card, Empty, Tabs, type TabsProps } from "antd";

const CompanyStatz = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <h6 className="text-[#748a84]">All tasks</h6>,
      children: <Empty description="Coming Soon" />,
    },
    {
      key: "2",
      label: <h6 className="text-[#748a84]">Requests</h6>,
      children: <Empty description="Coming Soon" />,
    },
    {
      key: "3",
      label: <h6 className="text-[#748a84]">Payments</h6>,
      children: <Empty description="Coming Soon" />,
    },
  ];

  return (
    <Card>
      <Tabs defaultActiveKey="1" items={items} />
    </Card>
  );
};

export default CompanyStatz;
