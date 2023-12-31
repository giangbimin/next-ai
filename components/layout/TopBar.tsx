'use client';

import { cn } from '@/lib/utils'
import React from 'react'
import Logo from "../elements/Logo";
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { useSidebarStore } from '@/stores/sidebar-store'

const Topbar = () => {
  const { handleOpenOrClose } = useSidebarStore();
  return (
    <div
      className={cn(
        "flex items-center p-4 justify-center sticky top-0",
        "lg:hidden"
      )}
    >
      <Logo />
      <Button variant={"ghost"} size={"icon"} onClick={handleOpenOrClose}>
        <Menu />
      </Button>
    </div>
  );
}

export default Topbar