// Interfaces para los stores de Zustand

// Para userStore
import { User } from '../types/user';

export interface DashboardFilters {
  agentsActivated: {
    whatsapp: boolean;
    smartupweb: boolean;
    email: boolean;
    facebook: boolean;
    instagram: boolean;
    model: boolean;
  };
  multiAgentsActivated: string[];
  showUnreadMessages: boolean;
}

export interface UserState {
  user: User | null;
  token: string | null;
  selectedOrganization: import('../features/organizationSelection/data/type').Organization | null;
  dashboardFilters: DashboardFilters;
  models: string[];
  channels_by_model: Record<string, string[]>;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setSelectedOrganization: (org: import('../features/organizationSelection/data/type').Organization | null) => void;
  setAgentsActivated: (agents: DashboardFilters['agentsActivated']) => void;
  setMultiAgentsActivated: (agents: string[]) => void;
  setShowUnreadMessages: (show: boolean) => void;
  setModels: (models: string[]) => void;
  setChannelsByModel: (channels: Record<string, string[]>) => void;
  logout: () => void;
}

// Para authStore
export interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
}

export type { User } from '../types/user'; 