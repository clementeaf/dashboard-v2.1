// Interfaces para los stores de Zustand

// Para userStore
import { User } from '../types/user';

export interface UserState {
  user: User | null;
  token: string | null;
  selectedOrganization: import('../features/organizationSelection/data/type').Organization | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setSelectedOrganization: (org: import('../features/organizationSelection/data/type').Organization | null) => void;
  logout: () => void;
}

// Para authStore
export interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
}

export type { User } from '../types/user'; 