export const apiRoutes = {
  users: {
    list: '/api/users',
    detail: (id: string): string => `/api/users/${id}`,
  },
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
  },
  // Más módulos aquí
};
