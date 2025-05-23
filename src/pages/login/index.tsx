import LoginBanner from "./components/LoginBanner";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <div className="bg-[#f5f5f5] h-screen flex">
      <div className="w-full md:w-1/2">
        <LoginForm />
      </div>

      <div className="hidden md:block md:w-1/2 h-screen p-10">
        <LoginBanner />
      </div>
    </div>
  );
};

export default Login;
