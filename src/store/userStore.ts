import { create } from 'zustand';
import { User, UserState } from './type';

export const useUserStore = create<UserState>((set) => ({
  user: null,
  token: null,
  selectedOrganization: null,
  dashboardFilters: {
    agentsActivated: {
      whatsapp: false,
      smartupweb: false,
      email: false,
      facebook: false,
      instagram: false,
      model: false,
    },
    multiAgentsActivated: [],
    showUnreadMessages: false,
  },
  models: [],
  channels_by_model: {},
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  setSelectedOrganization: (org) => set({ selectedOrganization: org }),
  setAgentsActivated: (agents) => set((state) => ({
    dashboardFilters: {
      ...state.dashboardFilters,
      agentsActivated: agents
    }
  })),
  setMultiAgentsActivated: (agents) => set((state) => ({
    dashboardFilters: {
      ...state.dashboardFilters,
      multiAgentsActivated: agents
    }
  })),
  setShowUnreadMessages: (show) => set((state) => ({
    dashboardFilters: {
      ...state.dashboardFilters,
      showUnreadMessages: show
    }
  })),
  setModels: (models) => set({ models }),
  setChannelsByModel: (channels) => set({ channels_by_model: channels }),
  logout: () => set({ 
    user: null, 
    token: null, 
    selectedOrganization: null,
    dashboardFilters: {
      agentsActivated: {
        whatsapp: false,
        smartupweb: false,
        email: false,
        facebook: false,
        instagram: false,
        model: false,
      },
      multiAgentsActivated: [],
      showUnreadMessages: false,
    },
    models: [],
    channels_by_model: {},
  }),
})); 