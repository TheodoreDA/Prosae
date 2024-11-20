'use client';

import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import type { AppPathnames } from '@/config';
import { Link } from '@/navigation';

interface NavigationLinkProps<Pathname extends AppPathnames> 
  extends ComponentPropsWithoutRef<typeof Link> {
  href: Pathname;
  className?: string;
  shouldntShrink?: boolean;
}

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  className,
  shouldntShrink = false,
  ...rest
}: NavigationLinkProps<Pathname>) {

  return (
    <Link
      className={clsx(
        className + ' inline-block',
        shouldntShrink
          ? ''
          : 'transition-all duration-300 ease-in-out hover:scale-90 transform-origin-center'
      )}
      href={href}
      {...rest}
    />
  );
}
