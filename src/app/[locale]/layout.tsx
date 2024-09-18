import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import localFont from 'next/font/local';
import clsx from 'clsx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerUnderDevelopment from '@/components/BannerUnderDevelopment';

const fontBelleza = localFont({ src: '../../../public/fonts/Belleza-Regular.ttf', variable: '--font-belleza' })

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
    <html lang={locale} className={`${fontBelleza.variable} font-sans`}>
      <body className={clsx(fontBelleza.className, 'flex flex-col')}>
        <Header />
        <BannerUnderDevelopment />
        {children}
        <Footer />
      </body>
    </html>
  );
}
