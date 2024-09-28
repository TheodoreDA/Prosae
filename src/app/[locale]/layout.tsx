import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import clsx from 'clsx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerUnderDevelopment from '@/components/BannerUnderDevelopment';
import { Belleza } from 'next/font/google';

const fontBelleza = Belleza({
  subsets: ["latin"],
  weight: '400',
  style: 'normal',
  variable: '--font-belleza',
});

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
      <body className={clsx(fontBelleza.className, 'max-w-extra mx-auto')}>
        <Header />
        <BannerUnderDevelopment />
        {children}
        <Footer />
      </body>
    </html>
  );
}
