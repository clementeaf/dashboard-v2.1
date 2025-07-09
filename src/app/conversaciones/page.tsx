"use client";
import React from 'react';
import SidebarLayout from '@/components/layout/SidebarLayout';
import { ConversationsFilters } from '@/components/filters';
import { DashboardProvider } from '@/contexts/DashboardContext';

const ConversacionesPage: React.FC = () => {
  return (
    <DashboardProvider>
      <SidebarLayout>
        <div className="flex flex-1 flex-col items-center justify-start w-full h-full">
          <div className="w-full max-w-4xl mx-auto p-6 md:p-12 bg-transparent flex flex-col items-center justify-center">
            <div className="w-full mb-6">
              <ConversationsFilters />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-black">Conversaciones</h1>
          </div>
        </div>
      </SidebarLayout>
    </DashboardProvider>
  );
};

export default ConversacionesPage; 