import { Button } from "antd";
import type { ReactNode } from "react";

interface BtnProps {
  children: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  onClickFxn?: (values?: any) => Promise<void> | any;
}

const PrimaryBtn: React.FC<BtnProps> = ({
  children,
  disabled,
  isLoading,
  onClickFxn,
  className,
}) => {
  return (
    <Button
      className={`cursor-pointer ${className}`}
      size={"large"}
      loading={isLoading ? isLoading : false}
      disabled={disabled ? disabled : false}
      color="primary"
      type="primary"
      shape="round"
      variant="filled"
      iconPosition="end"
      onClick={onClickFxn}
    >
      {children}
    </Button>
  );
};

export default PrimaryBtn;
