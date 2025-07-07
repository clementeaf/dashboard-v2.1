import { createAlova } from 'alova';
import fetchAdapter from 'alova/fetch';
import reactStatesHook from 'alova/react';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com';

export const alova = createAlova({
  baseURL,
  statesHook: reactStatesHook,
  requestAdapter: fetchAdapter(),
  beforeRequest(method) {
    // Ejemplo: añadir token de autenticación
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      method.config.headers = {
        ...method.config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
  },
  responded: {
    onSuccess: (response, _method) => response,
    onError: (error, _method) => {
      // Manejo global de errores
      throw error;
    },
  },
});
