import createMiddleware from 'next-intl/middleware';
import { pathnames, locales, localePrefix } from './config';
import { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
      defaultLocale: 'en',
      locales,
      pathnames,
      localePrefix,
      localeDetection: false,
    });
  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    // '/(fr|en|es)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|api|.*\\..*).*)',
  ],
};
