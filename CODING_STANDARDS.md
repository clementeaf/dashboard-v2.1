# 🧼 CODING_STANDARDS.md

Guía estricta de desarrollo para mantener calidad, consistencia y escalabilidad en proyectos Next.js con Tailwind CSS, Zustand, TanStack Query, AlovaJS, Testing Library y Vitest.

---

## 🔹 1. Clean Code

- Cada archivo debe tener una única responsabilidad (SRP).
- Nombres expresivos y autoexplicativos (no usar `data`, `value`, `handleStuff`).
- Evitar lógica compleja en componentes. Usar hooks y helpers.
- Separar lógica de presentación (UI) y lógica de negocio.
- No se permite el uso de `any` ni castings innecesarios (`as`).
- Componentes pequeños, puros y reutilizables.
- Comentarios solo donde el código no sea autoexplicativo.

---

## 🔹 2. Estructura del proyecto

src/
├── app/ # Rutas con App Router
├── components/ # Componentes compartidos
├── features/ # Por dominio (usuarios, auth, etc.)
│ └── [feature]/  
│ ├── components/  
│ ├── hooks/  
│ ├── api/  
│ └── store/  
├── hooks/ # Custom hooks compartidos
├── lib/ # Configuraciones (alova, react-query, etc.)
├── services/ # apiRoutes + apiClient
├── store/ # Global Zustand state
├── styles/ # Tailwind + estilos globales
├── types/ # Tipos TypeScript
├── utils/ # Funciones auxiliares
└── tests/ # Setup de tests

## 🔹 3. ESLint

Archivo recomendado .eslintrc.js:
module.exports = {
extends: [
'next',
'plugin:@typescript-eslint/recommended',
'plugin:react-hooks/recommended',
'prettier',
],
plugins: ['@typescript-eslint'],
parser: '@typescript-eslint/parser',
rules: {
'@typescript-eslint/explicit-function-return-type': 'error',
'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
'react-hooks/exhaustive-deps': 'warn',
'no-console': ['warn', { allow: ['warn', 'error'] }],
'no-magic-numbers': ['warn', { ignoreArrayIndexes: true, ignore: [0, 1, -1] }],
'complexity': ['warn', 8],
'max-lines-per-function': ['warn', 50],
'max-depth': ['warn', 3],
},
};

## 🔹 4. Prettier

Archivo .prettierrc.json:
{
"semi": true,
"singleQuote": true,
"trailingComma": "es5",
"printWidth": 100,
"tabWidth": 2,
"endOfLine": "lf"
}

Archivo .prettierignore:
node_modules
.next
dist
out
build
coverage

## 🔹 5. Zustand

Usar slices para dividir estado por dominio.

Guardar cada slice en src/store/[sliceName].ts.

Tipado obligatorio en todos los estados y acciones.

Evitar lógica de negocio dentro del componente.

## 🔹 6. AlovaJS + TanStack Query

Instancia de AlovaJS centralizada en src/lib/alova.ts.

Rutas declaradas en src/services/apiRoutes.ts:

export const apiRoutes = {
users: {
list: '/api/users',
detail: (id: string) => `/api/users/${id}`,
},
auth: {
login: '/api/auth/login',
register: '/api/auth/register',
},
};

Lógica de fetch reutilizable en apiClient.ts:

import { alovaInstance } from '../lib/alova';
import { apiRoutes } from './apiRoutes';

export const getUsers = () => alovaInstance.Get<User[]>(apiRoutes.users.list);

## 7. Testing

Herramientas:
vitest

@testing-library/react

@testing-library/jest-dom
Configuración mínima (vitest.config.ts):

import { defineConfig } from 'vitest/config';

export default defineConfig({
test: {
globals: true,
environment: 'jsdom',
setupFiles: './src/tests/setup.ts',
},
});

Reglas:
Cada componente debe tener al menos 1 test.

Cobertura mínima: 80% en nuevas funcionalidades.

Evitar testear implementación, enfócate en comportamiento.

Ejemplo:
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
it('muestra texto esperado', () => {
render(<MyComponent />);
expect(screen.getByText(/bienvenido/i)).toBeInTheDocument();
});
});

## 8. Docker

Archivo Dockerfile:

FROM node:18-alpine

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

Archivo docker-compose.yml:
version: '3.8'

services:
web:
build: .
ports: - "3000:3000"
volumes: - .:/app - /app/node_modules
environment: - NODE_ENV=production

## 🔹 9. Requisitos de cada PR

✅ Linter sin errores: npm run lint
✅ Formato correcto: npm run format
✅ Tests ejecutados y pasando: npm run test
✅ Cobertura mínima: 80%
✅ No se permiten componentes grandes, repetición, ni lógica sin separar

## 🔹 10. Revisión y mantenimiento

Este documento debe revisarse y actualizarse mensualmente o cuando se agregue una nueva tecnología.
