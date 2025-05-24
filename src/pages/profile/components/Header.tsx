import CustomTag from "@components/CustomTag";
import { LocationTick, WalletMoney } from "iconsax-reactjs";

const Header = () => {
  return (
    <div className="bg-[#171d1b] rounded-[0.9rem] p-10 flex justify-between">
      <div className="text-white">
        <h2 className=" text-[1.8rem] font-semibold">
          Hi, <span className="text-[#748a84]">Samuel M. Ortil</span>
        </h2>
        <p className="text-[1.4rem] mt-2">Welcome Back!</p>
      </div>
      <div className="flex items-center gap-4">
        <CustomTag
          label="Approve bills"
          icon={<LocationTick color="#171d1b" size={16} />}
        />
        <CustomTag
          label="Pay"
          icon={<WalletMoney color="#171d1b" size={16} />}
        />
      </div>
    </div>
  );
};

export default Header;
