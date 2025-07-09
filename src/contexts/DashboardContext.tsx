import React, { createContext, useContext, useState, useEffect } from 'react';

interface Conversation {
  conversationId: string;
  title?: string;
  channel?: string;
  // Otros campos que pueda tener una conversación
}

interface DashboardContextType {
  conversationsTable: Conversation[];
  allConversationsTable: Conversation[];
  isLoading: boolean;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard debe ser usado dentro de un DashboardProvider');
  }
  return context;
};

interface DashboardProviderProps {
  children: React.ReactNode;
}

export const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const [conversationsTable, setConversationsTable] = useState<Conversation[]>([]);
  const [allConversationsTable, setAllConversationsTable] = useState<Conversation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchConversations = async () => {
      setIsLoading(true);
      
      try {
        // Simulación de datos de conversaciones
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const mockConversations: Conversation[] = [
          { conversationId: 'wa_123456', title: 'Conversación WhatsApp 1' },
          { conversationId: 'web_789012', title: 'Conversación Web 1' },
          { conversationId: 'email_345678', title: 'Conversación Email 1' },
          { conversationId: 'fb_901234', title: 'Conversación Facebook 1' },
          { conversationId: 'ig_567890', title: 'Conversación Instagram 1' },
        ];
        
        setConversationsTable(mockConversations);
        setAllConversationsTable(mockConversations);
      } catch (error) {
        console.error('Error al cargar conversaciones:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchConversations();
  }, []);

  const value: DashboardContextType = {
    conversationsTable,
    allConversationsTable,
    isLoading
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}; 