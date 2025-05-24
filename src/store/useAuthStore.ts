import { create } from "zustand";

interface AuthState {
  userToken: string | null;
  setUserToken: (token: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>(
  (set: (partial: Partial<AuthState>) => void) => ({
    userToken: null,
    setUserToken: (token: string | null): void => set({ userToken: token }),
    logout: (): void => set({ userToken: null }),
  })
);
