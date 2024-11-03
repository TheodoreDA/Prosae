'use client';

import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';
import type { AppPathnames } from '@/config';
import { Link } from '@/navigation';

export default function HeaderLink<Pathname extends AppPathnames>({
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
        ' inline-block uppercase text-nowrap',
        isActive
          ? 'text-secondary font-extrabold'
          : 'text-black hover:font-extrabold'
      )}
      href={href}
      {...rest}
    />
  );
}
