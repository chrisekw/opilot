'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Save, CreditCard, Settings, Gift } from 'lucide-react';
import { 
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/saved-leads', icon: Save, label: 'Saved Leads' },
  { href: '/referrals', icon: Gift, label: 'Referrals' },
  { href: '/pricing', icon: CreditCard, label: 'Pricing' },
  { href: '/settings', icon: Settings, label: 'Settings' },
];

export function AppSidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.href);
        const Icon = item.icon;
        return (
          <SidebarMenuItem key={item.href}>
             <SidebarMenuButton asChild isActive={isActive} tooltip={{children: item.label}}>
              <Link href={item.href}>
                <Icon />
                <span>{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
