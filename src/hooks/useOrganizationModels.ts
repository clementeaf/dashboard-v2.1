import { useState, useEffect } from 'react';

interface UseOrganizationModelsProps {
  organizationId: string | null;
  enabled?: boolean;
}

interface UseOrganizationModelsReturn {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  data: string[];
}

export const useOrganizationModels = ({ 
  organizationId, 
  enabled = true 
}: UseOrganizationModelsProps): UseOrganizationModelsReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    if (!enabled || !organizationId) {
      setData([]);
      return;
    }

    const fetchModels = async () => {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      try {
        // Simulación de llamada a API
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Datos mock para demostración
        const mockModels = [
          'gpt-4',
          'gpt-3.5-turbo',
          'claude-3-opus',
          'claude-3-sonnet'
        ];
        
        setData(mockModels);
      } catch (err) {
        setIsError(true);
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchModels();
  }, [organizationId, enabled]);

  return {
    isLoading,
    isError,
    error,
    data
  };
}; 