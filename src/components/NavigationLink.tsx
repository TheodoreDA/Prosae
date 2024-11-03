'use client';

import clsx from 'clsx';
import { ComponentProps } from 'react';
import type { AppPathnames } from '@/config';
import { Link } from '@/navigation';

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  className,
  shouldntShrink = false,
  ...rest
}: ComponentProps<typeof Link<Pathname>> & { shouldntShrink?: boolean }) {

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
