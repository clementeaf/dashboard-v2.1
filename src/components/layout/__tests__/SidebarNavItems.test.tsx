import { navItems } from '../sidebarNavItems';
import { Home, MessageCircle, BarChart2, MessageSquare, Bot, User as UserIcon } from 'lucide-react';

describe('sidebarNavItems', () => {
  it('contiene los labels y tipos de iconos correctos', () => {
    expect(navItems).toHaveLength(6);
    expect(navItems[0]).toMatchObject({ label: 'Inicio', icon: Home });
    expect(navItems[1]).toMatchObject({ label: 'Conversaciones', icon: MessageCircle });
    expect(navItems[2]).toMatchObject({ label: 'Métricas', icon: BarChart2 });
    expect(navItems[3]).toMatchObject({ label: 'Feedback', icon: MessageSquare });
    expect(navItems[4]).toMatchObject({ label: 'Agentes', icon: Bot });
    expect(navItems[5]).toMatchObject({ label: 'Cuenta', icon: UserIcon });
  });
}); 