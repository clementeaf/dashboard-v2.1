// Interfaces para los servicios de API

import type { User } from '../types/user';

// Para apiClient - Login
export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
} 