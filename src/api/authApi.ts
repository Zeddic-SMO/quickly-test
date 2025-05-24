import type { LoginPayload, LoginResponse } from "@interface/auth.interface";
import type { UserProfile } from "@interface/profile.interface";
import axios from "axios";
import { API_URL } from "./base";

export const loginApi = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const { data } = await axios.post(`${API_URL}/auth/login`, payload);
  return data;
};

export const fetchUserApi = async (token: string): Promise<UserProfile> => {
  const { data } = await axios.get(`${API_URL}/auth/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.user;
};
