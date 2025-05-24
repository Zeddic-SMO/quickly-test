export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: { email: string; token: string };
}