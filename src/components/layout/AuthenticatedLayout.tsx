import React from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';

export interface AuthenticatedLayoutProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({ 
  children, 
  redirectTo = '/login' 
}) => {
  const router = useRouter();
  const user = useUserStore((state) => state.user);

  // Redirección si no hay usuario
  React.useEffect(() => {
    if (!user) {
      router.replace(redirectTo);
    }
  }, [user, router, redirectTo]);

  if (!user) return <></>;

  return <>{children}</>;
}; 