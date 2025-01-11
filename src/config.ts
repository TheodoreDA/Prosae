import { Pathnames } from 'next-intl/navigation';

// export const locales = ['en', 'fr', 'es'] as const;
export const locales = ['fr'] as const;

export const pathnames = {
  '/': '/',
  '/who_am_i': '/who_am_i',
  '/correction': '/correction',
  '/interpretariat': '/interpretariat',
  '/biography': '/biography',
  '/contact': '/contact',
  '/contact#questions': '/contact#questions',
  '/privacy_policy': '/privacy_policy',
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
