import React from 'react';
import SidebarLayout from '@/components/layout/SidebarLayout';

const ConversacionesPage: React.FC = () => (
  <SidebarLayout>
    <div className="flex flex-1 items-center justify-center w-full h-full">
      <div className="w-full max-w-4xl mx-auto p-12 bg-transparent flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-black">Conversaciones</h1>
      </div>
    </div>
  </SidebarLayout>
);

export default ConversacionesPage; 