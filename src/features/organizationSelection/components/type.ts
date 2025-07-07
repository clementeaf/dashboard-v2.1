// Interfaces de props para los componentes de selección de organización

// Para OrganizationList
export interface OrganizationListProps {
  organizations: import('../data/type').Organization[];
  filter: string;
  onSelect: (org: import('../data/type').Organization) => void;
}

// Para OrganizationCard
export interface OrganizationCardProps {
  name: string;
  onClick?: () => void;
}

// Para OrganizationSearch
export interface OrganizationSearchProps {
  value: string;
  onChange: (value: string) => void;
}

// Para WelcomeHeader
export interface WelcomeHeaderProps {
  name: string;
}

// Para BottomActions
export interface BottomActionsProps {
  onSettings: () => void;
  onLogout: () => void;
} 