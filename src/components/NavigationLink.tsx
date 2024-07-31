'use client';

import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';
import type { AppPathnames } from '../config';
import { Link } from '../navigation';

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'inline-block transition-colors uppercase',
        isActive
          ? 'text-black font-extrabold underline underline-offset-8'
          : 'text-gray-600 font-light hover:text-black hover:font-bold'
      )}
      href={href}
      {...rest}
    />
  );
}
