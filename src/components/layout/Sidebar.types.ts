import type { User } from '@/types/user';
import type { Organization } from '@/features/organizationSelection/data/type';

export interface SidebarProps {
  user: User | null;
  organization: Organization | null;
} 