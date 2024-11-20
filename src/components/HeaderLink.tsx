'use client';

import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentPropsWithoutRef } from 'react';
import type { AppPathnames } from '@/config';
import { Link } from '@/navigation';

interface HeaderLinkProps<Pathname extends AppPathnames> 
  extends ComponentPropsWithoutRef<typeof Link> {
  href: Pathname;
  className?: string;
  shouldntShrink?: boolean;
}

export default function HeaderLink<Pathname extends AppPathnames>({
  href,
  className = "",
  ...rest
}: HeaderLinkProps<Pathname>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        className + ' inline-block uppercase text-nowrap',
        isActive
          ? 'text-secondary font-extrabold'
          : 'text-black hover:font-extrabold'
      )}
      href={href}
      {...rest}
    />
  );
}
