import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prosae',
  description: 'Le site internet de Prosae',
};

type LayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
};

export default function LocaleLayout({ params, children }: LayoutProps) {
  const { locale } = params;

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={clsx(inter.className, 'flex flex-col min-h-screen')}>
        <div className="grow">{children}</div>
      </body>
    </html>
  );
}
