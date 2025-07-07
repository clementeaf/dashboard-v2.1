"use client";
import React from 'react';
import { LoginForm } from '@/features/auth/components/LoginForm';

export default function LoginPage(): React.JSX.Element {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900">
      <LoginForm />
    </main>
  );
} 