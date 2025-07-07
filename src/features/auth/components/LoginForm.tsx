import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import { LoginActions } from './LoginActions';
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';
import { Input, Checkbox, Card, IconAvatar } from '@/components/ui';
import { GoogleLoginButton } from './GoogleLoginButton';

export const LoginForm: React.FC = () => {
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Completa todos los campos');
      return;
    }
    setUser({ id: '1', name: email.split('@')[0], email });
    setToken('mock-token');
    router.replace('/');
  };

  return (
    <Card className="max-w-md w-full mx-auto flex flex-col items-center bg-white/10 border border-white/10 shadow-2xl rounded-3xl p-10 md:p-12 backdrop-blur-md">
      <div className="flex flex-col items-center w-full">
        <div className="bg-gradient-to-br from-violet-600 to-violet-400 rounded-full shadow-lg mb-6 mt-2 flex items-center justify-center w-20 h-20">
          <Bot className="text-white w-14 h-14" />
        </div>
        <h1 className="text-3xl font-extrabold text-center text-white mb-2 tracking-tight">SmartUp Dashboard</h1>
        <p className="text-base text-slate-300 text-center mb-8">Accede a tu panel de agentes de IA</p>
      </div>
      <form className="w-full flex flex-col gap-6 mb-2" onSubmit={handleSubmit} role="form">
        <Input
          id="email"
          label="Correo electrónico"
          type="email"
          placeholder="nombre@ejemplo.com"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          required
        />
        <Input
          id="password"
          label="Contraseña"
          type="password"
          placeholder="********"
          value={password}
          onChange={setPassword}
          autoComplete="current-password"
          required
        />
        <div className="flex items-center justify-between mt-2 mb-2 gap-2 flex-wrap">
          <Checkbox
            id="remember"
            label="Recuérdame"
            checked={remember}
            onChange={setRemember}
          />
          <a href="#" className="text-xs text-violet-400 hover:underline transition-colors">
            ¿Problemas para acceder? Contacta al soporte
          </a>
        </div>
        {error && <div className="text-red-500 text-xs text-center mb-2">{error}</div>}
        <div className="mt-2">
          <LoginActions />
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
          <div className="flex-1 border-t border-slate-700" />
          <span className="mx-2 text-slate-400">o continúa con</span>
          <div className="flex-1 border-t border-slate-700" />
        </div>
        <GoogleLoginButton onClick={() => { /* lógica futura de Google OAuth */ }} />
      </form>
    </Card>
  );
}; 