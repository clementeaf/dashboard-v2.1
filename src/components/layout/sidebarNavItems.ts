import { Home, MessageCircle, BarChart2, MessageSquare, Bot, User as UserIcon } from 'lucide-react';

export const navItems = [
  { label: 'Inicio', icon: Home, href: '/' },
  { label: 'Conversaciones', icon: MessageCircle, href: '/conversaciones' },
  { label: 'Métricas', icon: BarChart2, href: '/metricas' },
  { label: 'Feedback', icon: MessageSquare, href: '/feedback' },
  { label: 'Agentes', icon: Bot, href: '/agentes' },
  { label: 'Cuenta', icon: UserIcon, href: '/cuenta' },
]; 