import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <div className="bg-[#f5f5f5] h-screen flex">
      <div className="w-1/2">
        <LoginForm />
      </div>

      <div className="w-full md:w-1/2 h-screen p-10">
        <div className="w-full h-full flex items-center justify-center bg-[#171d1b] rounded-3xl shadow-lg"></div>
      </div>
    </div>
  );
};

export default Login;
