import { Pathnames } from 'next-intl/navigation';

// export const locales = ['en', 'fr', 'es'] as const;
export const locales = ['fr'] as const;

export const pathnames = {
  '/': '/',
  '/qui_suis_je': '/qui_suis_je',
  '/correction': '/correction',
  '/interpretariat': '/interpretariat',
  '/biographie': '/biographie',
  '/contact': '/contact',
  '/contact#questions': '/contact#questions',
  '/politique_confidentialite': '/politique_confidentialite',
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
