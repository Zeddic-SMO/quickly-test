import CustomTag from "@components/CustomTag";
import { useAuthStore } from "@store/useAuthStore";
import { Dropdown } from "antd";
import { ArrowDown2, LocationTick, Logout, WalletMoney } from "iconsax-reactjs";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  fullName: string;
  avatar: string | null;
}

const Header: React.FC<HeaderProps> = ({ fullName, avatar }) => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const profileMenu = {
    items: [
      {
        key: "logout",
        danger: true,
        icon: <Logout color="#ff4d4f" size={16} />,
        label: (
          <p
            className="w-full text-left"
            onClick={() => {
              logout();
              navigate("/login", { replace: true });
            }}
          >
            Logout
          </p>
        ),
      },
    ],
  };
  return (
    <div className="bg-[#171d1b] rounded-[0.9rem] p-10 flex justify-between">
      <div className="text-white">
        <h2 className=" text-[1.8rem] font-semibold">
          Hi, <span className="text-[#748a84]">{fullName}</span>
        </h2>
        <p className="text-[1.4rem] mt-2">Welcome Back!</p>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center gap-4">
        <CustomTag
          label="Approve bills"
          icon={<LocationTick color="#171d1b" size={16} />}
        />
        <CustomTag
          label="Pay"
          icon={<WalletMoney color="#171d1b" size={16} />}
          className="mr-8"
        />

        <Dropdown menu={profileMenu} trigger={["hover"]}>
          <div className="flex items-center">
            {avatar ? (
              <img
                src={avatar}
                alt="User Avatar"
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <span className="text-white text-[2rem] mr-4 border rounded-full w-16 h-16 flex items-center justify-center">
                {fullName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2)}
              </span>
            )}
            <ArrowDown2 color="#fff" size={14} />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
