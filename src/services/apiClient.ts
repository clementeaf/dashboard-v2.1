import { alova } from '../lib/alova';
import { apiRoutes } from './apiRoutes';
import type { User } from '../types/user';
import { LoginPayload, AuthResponse } from './type';

// Mock temporal para desarrollo sin backend
export const getUsers = async (): Promise<User[]> => [
  { id: '1', name: 'Usuario 1', email: 'user1@example.com' },
  { id: '2', name: 'Usuario 2', email: 'user2@example.com' },
];

// Obtener detalle de usuario
export const getUserById = (id: string): ReturnType<typeof alova.Get<User>> =>
  alova.Get<User>(apiRoutes.users.detail(id));



export const login = (payload: LoginPayload): ReturnType<typeof alova.Post<AuthResponse>> =>
  alova.Post<AuthResponse>(apiRoutes.auth.login, payload);

// Puedes agregar más funciones según los módulos definidos en apiRoutes
