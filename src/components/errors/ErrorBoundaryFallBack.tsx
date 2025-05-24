const ErrorBoundaryFallBack = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="/quickly.jpeg"
        alt="Quickly Logo"
        className="w-[5.5rem] rounded-full"
      />
      <div className="px-[2.4rem] lg:w-[65rem] text-[1.6rem] text-center mt-[2.5rem]">
        <p className="font-bold text-[2.2rem]">
          Oops! Something unexpected has occurred. 😟
        </p>
        <p className="mb-[0.8rem] ">
          We're working to fix this. Thanks for your patience.
        </p>
        <p className="mt-[2.4rem]">
          Kindly try again later or{" "}
          <span className="font-bold underline text-BrandPrimary">
            Contact Us
          </span>{" "}
          for further assistance
        </p>
      </div>
    </div>
  );
};

export default ErrorBoundaryFallBack;
