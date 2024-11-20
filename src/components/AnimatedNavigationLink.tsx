'use client';

import { ComponentPropsWithoutRef } from 'react';
import type { AppPathnames } from '../config';
import { Link } from '@/navigation';

interface AnimatedNavigationLinkProps<Pathname extends AppPathnames> 
  extends ComponentPropsWithoutRef<typeof Link> {
  href: Pathname;
  className?: string;
  shouldntShrink?: boolean;
}

export default function AnimatedNavigationLink<Pathname extends AppPathnames>({
  href,
  children,
  ...rest
}: AnimatedNavigationLinkProps<Pathname>) {
  return (
    <Link
      className={'relative group content-center text-center w-52 h-16'}
      href={href}
      {...rest}
    >
      {children}
      
      {/* Interactive border */}
      <div className="relative left-0 bottom-0 h-[2px] w-full bg-secondary transition-all duration-200 transform scale-x-100 translate-y-2 group-hover:translate-y-0" />
    </Link>
  );
}
