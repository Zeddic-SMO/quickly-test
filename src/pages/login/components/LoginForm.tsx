import { loginApi } from "@api/authApi";
import PrimaryBtn from "@components/buttons/PrimaryBtn";
import type { LoginPayload, LoginResponse } from "@interface/auth.interface";
import { useAuthStore } from "@store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { emailValidator, passwordValidator } from "@utils/validators";
import { Alert, Form, Input, message } from "antd";
import { Lock, Sms } from "iconsax-reactjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const setUser = useAuthStore((s) => s.setUserToken);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const mutation = useMutation<LoginResponse, any, LoginPayload>({
    mutationFn: loginApi,
    onSuccess: (data) => {
      message.success(data.message);
      setUser(data.token);
      navigate("/profile");
    },
    onError: (err: any) => {
      setError(err?.response?.data?.message || "Login failed");
    },
  });

  const onFinish = (values: LoginPayload) => {
    setError(null);
    mutation.mutate(values);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-[35rem] flex justify-center flex-col items-center">
        <img
          src="/quickly.jpeg"
          alt="Quickly Logo"
          className="w-[5.5rem] rounded-full"
        />

        <h1 className="text-[2.8rem] text-[#171d1b] mt-4">Welcome back</h1>
        <p className="text-[#171d1b] text-[1.6rem] mt-2 text-center">
          Please enter your email and password to log in.
        </p>
      </div>

      <div className="w-[35rem] mt-[2.5rem]">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="email" rules={[{ validator: emailValidator }]}>
            <Input
              size="large"
              prefix={<Sms size={14} />}
              id="test"
              placeholder="Email"
              className="rounded-[0.5rem] text-[1rem]"
              onChange={() => error && setError(null)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ validator: passwordValidator }]}
            hasFeedback
          >
            <Input.Password
              size="large"
              prefix={<Lock size={14} />}
              placeholder="Password"
              className="border-[1px] border-[#171d1b] rounded-[0.5rem] text-[1rem]"
              onChange={() => error && setError(null)}
            />
          </Form.Item>

          {error && (
            <div className="mb-4">
              <Alert type="error" message={error} showIcon />
            </div>
          )}

          <Form.Item>
            <PrimaryBtn
              htmlType="submit"
              isLoading={mutation.isPending}
              className="w-full h-[4rem]"
            >
              <span className="text-white">Log In</span>
            </PrimaryBtn>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
