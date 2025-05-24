import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  userToken: string | null;
  setUserToken: (token: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userToken: null,
      setUserToken: (token: string | null): void => set({ userToken: token }),
      logout: (): void => set({ userToken: null }),
    }),
    {
      name: "auth-key",
    }
  )
);
