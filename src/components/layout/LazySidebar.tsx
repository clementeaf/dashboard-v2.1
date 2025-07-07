"use client";

import React, { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui';

// Lazy load del componente Sidebar
const Sidebar = React.lazy(() => import('./Sidebar'));

interface LazySidebarProps {
  user: any;
  organization: any;
}

export const LazySidebar: React.FC<LazySidebarProps> = ({ user, organization }) => {
  return (
    <Suspense 
      fallback={
        <aside className="w-64 text-white flex flex-col py-6 px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-gray-600 animate-pulse" />
            <div className="flex-1">
              <div className="h-4 bg-gray-600 rounded animate-pulse mb-2" />
              <div className="h-3 bg-gray-600 rounded animate-pulse w-2/3" />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 px-3 py-2">
                <div className="w-5 h-5 bg-gray-600 rounded animate-pulse" />
                <div className="h-4 bg-gray-600 rounded animate-pulse flex-1" />
              </div>
            ))}
          </div>
        </aside>
      }
    >
      <Sidebar user={user} organization={organization} />
    </Suspense>
  );
};

export default LazySidebar; 