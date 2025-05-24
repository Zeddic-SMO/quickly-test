import { create } from "zustand";

interface User {
  email: string;
  token: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>(
  (set: (partial: Partial<AuthState>) => void) => ({
    user: null,
    setUser: (user: User | null): void => set({ user }),
    logout: (): void => set({ user: null }),
  })
);
