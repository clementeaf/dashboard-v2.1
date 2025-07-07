import { create } from 'zustand';
import { User, UserState } from './type';

export const useUserStore = create<UserState>((set) => ({
  user: null,
  token: null,
  selectedOrganization: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  setSelectedOrganization: (org) => set({ selectedOrganization: org }),
  logout: () => set({ user: null, token: null, selectedOrganization: null }),
})); 