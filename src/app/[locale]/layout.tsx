import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerUnderDevelopment from '@/components/BannerUnderDevelopment';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  params: { locale: string };
};

export async function generateMetadata({params: { locale }}: Props) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: "Prosae",
    description: t("description")
  };
}

type LayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
};

export default function LocaleLayout({ params, children }: LayoutProps) {
  const { locale } = params;

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={clsx(
          inter.className,
          'flex flex-col overflow-hidden h-screen'
        )}
      >
        <Header />
        <BannerUnderDevelopment />
        <div className="min-h-body overflow-y-scroll">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
