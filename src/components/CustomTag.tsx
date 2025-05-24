import React, { type ReactNode } from "react";

interface CustomTagProps {
  label: string;
  icon?: ReactNode;
  className?: string;
}

const CustomTag: React.FC<CustomTagProps> = ({ label, icon, className }) => {
  return (
    <span
      className={`inline-flex items-center px-6 py-3 rounded-full bg-[#748a84] shadow text-[#171d1b] font-medium text-[1.2rem] gap-2 ${className}`}
    >
      {label}
      {icon}
    </span>
  );
};

export default CustomTag;
