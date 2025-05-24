import type { LoginPayload, LoginResponse } from "@interface/auth.interface";
import type { UserProfile } from "@interface/profile.interface";
import axios from "axios";

export const loginApi = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const { data } = await axios.post("/api/login", payload);
  return data;
};

export const fetchUserApi = async (token: string): Promise<UserProfile> => {
  const { data } = await axios.get("/api/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.user;
};
