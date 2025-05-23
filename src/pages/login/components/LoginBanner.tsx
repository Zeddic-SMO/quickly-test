import { ArrowCircleRight2 } from "iconsax-reactjs";

const LoginBanner = () => {
  const whyChoseUsItems = [
    "Earn discounts on supplier bills.",
    "Auto-sync with your existing finance stack",
    "Improve professional relationships with faster payments",
  ];
  return (
    <div className="w-full h-full flex items-center bg-[#171d1b] rounded-3xl shadow-lg p-[3.5rem]">
      <div>
        <h2 className="text-[6.5rem] leading-30 text-white font-semibold mb-10">
          Your most <br />
          <span className="text-[#748a84]">
            valuable <br /> business
          </span>{" "}
          tool
        </h2>

        {whyChoseUsItems.map((item, idx) => (
          <p
            key={idx}
            className="text-[#c3c6c5] text-[1.6rem] flex items-center mt-3"
          >
            <ArrowCircleRight2
              size="20"
              color="#ff507f"
              variant="Bold"
              className="mr-2"
            />
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LoginBanner;
