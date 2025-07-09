import { useUserStore } from '@/store/userStore';

export const useOrganizationData = () => {
  const selectedOrganization = useUserStore((state) => state.selectedOrganization);
  
  return {
    organizationId: selectedOrganization?.id || null,
    organizationName: selectedOrganization?.name || null,
    organization: selectedOrganization
  };
}; 