import { createNavigation } from 'next-intl/navigation';
import { locales, pathnames, localePrefix } from './config';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: locales,
  defaultLocale: 'en',
  localePrefix: localePrefix,
  pathnames: pathnames,
});
 
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
