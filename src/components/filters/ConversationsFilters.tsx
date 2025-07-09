'use client';

import React, { useEffect, useMemo } from 'react';
import { useUserStore } from '@/store/userStore';
import { useOrganizationData } from '@/hooks/useOrganizationData';
import { useOrganizationModels } from '@/hooks/useOrganizationModels';
import { useDashboard } from '@/contexts/DashboardContext';
import { getChannelType } from '@/utils/conversationUtils';
import { availableFilters } from '@/utils/conversationFilters';
import { Brain } from 'lucide-react';

const channelTypeToFilterId: Record<string, string | null> = {
  'whatsapp': 'whatsapp',
  'smartupweb': 'smartupweb',
  'email': 'email',
  'facebook': 'facebook',
  'instagram': 'instagram',
  'unknown': null
};

const ConversationsFilters: React.FC = () => {
  const { organizationId } = useOrganizationData();
  const {
    isLoading: modelsLoading,
    isError: modelsError,
    error: modelsErrorDetails,
    data: models
  } = useOrganizationModels({
    organizationId,
    enabled: !!organizationId
  });

  const { conversationsTable, allConversationsTable } = useDashboard();
  const allConversations = (allConversationsTable && allConversationsTable.length > 0) 
    ? allConversationsTable 
    : conversationsTable;

  // Zustand store selectors
  const agentsActivated = useUserStore((state) => state.dashboardFilters.agentsActivated);
  const multiAgentsActivated = useUserStore((state) => state.dashboardFilters.multiAgentsActivated);
  const setAgentsActivated = useUserStore((state) => state.setAgentsActivated);
  const setMultiAgentsActivated = useUserStore((state) => state.setMultiAgentsActivated);
  const storeModels = useUserStore((state) => state.models);
  const channelsByModel = useUserStore((state) => state.channels_by_model);
  const setModels = useUserStore((state) => state.setModels);
  const setChannelsByModel = useUserStore((state) => state.setChannelsByModel);

  // Actualizar modelos en el store cuando se cargan
  useEffect(() => {
    if (models.length > 0) {
      setModels(models);
      
      // Simular canales por modelo
      const mockChannelsByModel: Record<string, string[]> = {
        'gpt-4': ['whatsapp', 'smartupweb', 'email'],
        'gpt-3.5-turbo': ['whatsapp', 'smartupweb'],
        'claude-3-opus': ['whatsapp', 'smartupweb', 'email', 'facebook', 'instagram'],
        'claude-3-sonnet': ['whatsapp', 'smartupweb', 'email']
      };
      
      setChannelsByModel(mockChannelsByModel);
    }
  }, [models, setModels, setChannelsByModel]);

  const detectedChannels = useMemo(() => {
    if (!allConversations || allConversations.length === 0) {
      return new Set<string>();
    }

    const channels = new Set<string>();

    allConversations.forEach((conversation) => {
      if (conversation.conversationId) {
        const channelType = getChannelType(conversation.conversationId);
        const filterId = channelTypeToFilterId[channelType];
        
        if (filterId) {
          channels.add(filterId);
        }
      }
    });

    return channels;
  }, [allConversations]);

  useEffect(() => {
    if (detectedChannels.size > 0) {
      const currentState = agentsActivated || {};
      const hasAnyChannelActive = Object.values(currentState).some(Boolean);
      
      if (!hasAnyChannelActive) {
        const newAgentsActivated = { ...currentState };
        
        detectedChannels.forEach(channelId => {
          if (channelId in newAgentsActivated) {
            (newAgentsActivated as any)[channelId] = true;
          }
        });
        
        setAgentsActivated(newAgentsActivated);
      }
    }
  }, [detectedChannels, agentsActivated, setAgentsActivated]);

  const handleFilterChange = (filterId: string) => {
    const currentValue = (agentsActivated as any)[filterId] || false;
    const newValue = !currentValue;
    
    const newAgentsActivated = {
      whatsapp: agentsActivated.whatsapp || false,
      smartupweb: agentsActivated.smartupweb || false,
      email: agentsActivated.email || false,
      facebook: agentsActivated.facebook || false,
      instagram: agentsActivated.instagram || false,
      model: agentsActivated.model || false,
      [filterId]: newValue
    };
    
    setAgentsActivated(newAgentsActivated);
  };

  const handleModelChange = (model: string) => {
    const currentModels = [...multiAgentsActivated];
    const modelIndex = currentModels.indexOf(model);

    if (modelIndex > -1) {
      currentModels.splice(modelIndex, 1);
    } else {
      currentModels.push(model);
    }

    setMultiAgentsActivated(currentModels);
  };

  const modeloSeleccionado = multiAgentsActivated[0];
  const canalesDelModelo = channelsByModel && modeloSeleccionado ? channelsByModel[modeloSeleccionado] || [] : [];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="space-y-6">
        {/* SECCIÓN DE CANALES */}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            {availableFilters.map((filter) => {
              const isChecked = (agentsActivated as any)[filter.id] || false;
              const isAvailableForModel = canalesDelModelo.includes(filter.id);
              const IconComponent = filter.icon;

              return (
                <label
                  key={filter.id}
                  className={`relative flex items-center gap-3 cursor-pointer py-2 px-3 rounded-lg border transition-all duration-200 ${
                    !isAvailableForModel
                      ? 'opacity-50 cursor-not-allowed border-gray-200 bg-gray-50'
                      : isChecked
                        ? 'border-purple-200 bg-purple-50 hover:bg-purple-100'
                        : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300'
                  }`}
                  title={
                    isAvailableForModel
                      ? `Canal disponible para el modelo seleccionado`
                      : `Canal no disponible para este modelo`
                  }
                >
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleFilterChange(filter.id)}
                      disabled={!isAvailableForModel}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      isAvailableForModel
                        ? isChecked 
                          ? 'border-purple-500 bg-purple-500' 
                          : 'border-gray-300'
                        : 'border-gray-200 bg-gray-100'
                    }`}>
                      {isChecked && isAvailableForModel && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className={`flex items-center gap-2 font-medium ${
                    isAvailableForModel ? 'text-gray-700' : 'text-gray-400'
                  }`}>
                    <IconComponent size={18} />
                    {filter.label}
                    {isAvailableForModel && (
                      <span className="w-2 h-2 bg-green-500 rounded-full" title="Canal activo" />
                    )}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* SECCIÓN DE MODELOS */}
        <div>       
          {modelsLoading && (
            <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent"></div>
              <span className="text-sm text-blue-700">Cargando modelos...</span>
            </div>
          )}
          
          {modelsError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-700">
                ⚠️ Error al cargar modelos: {modelsErrorDetails?.message || 'Error desconocido'}
              </p>
            </div>
          )}
          
          {!modelsLoading && !modelsError && storeModels.length === 0 && (
            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-600">
                📭 No hay modelos disponibles para esta organización
              </p>
            </div>
          )}
          
          {storeModels.length > 0 && !modelsLoading && (
            <>
              <div className="flex flex-wrap gap-3 items-center">
                {storeModels.map((model) => (
                  <label
                    key={model}
                    className={`flex items-center gap-3 cursor-pointer py-2 px-3 rounded-lg border transition-all duration-200 ${
                      multiAgentsActivated.includes(model)
                        ? 'border-blue-200 bg-blue-50 hover:bg-blue-100'
                        : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={multiAgentsActivated.includes(model)}
                        onChange={() => handleModelChange(model)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        multiAgentsActivated.includes(model)
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {multiAgentsActivated.includes(model) && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="font-medium text-gray-700 flex items-center gap-2">
                      <Brain size={18} className="text-blue-600" />
                      <span className="text-sm">{model}</span>
                    </span>
                  </label>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationsFilters; 