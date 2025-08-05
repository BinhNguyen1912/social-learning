'use client';
import * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { NavMain } from '@/components/layout/nav-main';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="bg-white dark:bg-grayDarker dark:text-white dark:border-r-white/10"
    >
      <SidebarHeader>
        <SidebarMenuButton asChild>
          <Link href={'/'}>
            <span className="font-bold text-[20px] mt-3">Bình Nguyễn</span>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <UserButton />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
