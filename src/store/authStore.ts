import { create } from 'zustand';
import { AuthState } from './type';

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token: string | null): void => set({ token }),
}));
