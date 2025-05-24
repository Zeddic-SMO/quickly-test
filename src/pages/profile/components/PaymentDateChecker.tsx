import { Card, DatePicker, Select } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const PaymentDateChecker = () => {
  const [invoiceDue, setInvoiceDue] = useState<Dayjs | null>(null);
  const [paycycleDate, setPaycycleDate] = useState<Dayjs | null>(null);

  const getNextPaymentDate = () => {
    if (!invoiceDue || !paycycleDate) return null;

    const payDay = paycycleDate.date();
    let nextPay = invoiceDue.date(payDay);
    if (nextPay.isBefore(invoiceDue, "day")) {
      nextPay = nextPay.add(1, "month");
    }

    if (nextPay.date() !== payDay) {
      nextPay = nextPay.endOf("month");
    }
    return nextPay;
  };

  const nextPayment = getNextPaymentDate();
  return (
    <Card title="Payment Date Checker">
      <div className="w-full bg-[#f5f5f5] rounded-xl p-8 shadow flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h6 className="text-[#748a84]">Invoice Due Date</h6>

            <DatePicker
              className="w-full"
              size="large"
              value={invoiceDue}
              onChange={setInvoiceDue}
              format="YYYY-MM-DD"
              placeholder="Select invoice due date"
              allowClear
            />
          </div>

          <div className="flex-1">
            <h6 className="text-[#748a84]">Paycycle Day (Monthly)</h6>
            <Select
              className="w-full"
              size="large"
              value={paycycleDate ? paycycleDate.date() : undefined}
              onChange={(day) => {
                if (invoiceDue) {
                  setPaycycleDate(dayjs(invoiceDue).date(day));
                }
              }}
              placeholder="Select day (1-31)"
              allowClear
              disabled={!invoiceDue}
            >
              {Array.from({ length: 31 }, (_, i) => (
                <Select.Option key={i + 1} value={i + 1}>
                  {i + 1}
                </Select.Option>
              ))}
            </Select>
            <p className="mt-1 text-[1rem] font-semibold italic">
              Select the day of the month for your paycycle (e.g. 30 for "every
              month on the 30th").
            </p>
          </div>
        </div>
        {invoiceDue && paycycleDate && (
          <div className="mt-4">
            <p style={{ color: "#171d1b" }}>
              Your invoice pay date will be{" "}
              <span className="text-[#ff507f]">
                {nextPayment ? nextPayment.format("MMMM D, YYYY") : "N/A"}
              </span>
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default PaymentDateChecker;
