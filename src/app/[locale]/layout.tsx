import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import clsx from 'clsx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerUnderDevelopment from '@/components/BannerUnderDevelopment';
import { Belleza } from 'next/font/google';
import { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import pick from 'lodash/pick';

const fontBelleza = Belleza({
  subsets: ["latin"],
  weight: '400',
  style: 'normal',
  variable: '--font-belleza',
});

type Props = {
  params: { locale: string };
};

export async function generateMetadata({params: { locale }}: Props): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: "Prosae",
    description: t("description"),
    keywords: ["haha", "hoho", "hihi"],
    authors: [{ name: "Jeanne Sabiron", url: "https://prosae.net" }],
  };
}

type LayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
};

export default function LocaleLayout({ params, children }: LayoutProps) {
  const messages = useMessages();
  const { locale } = params;

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} className={`${fontBelleza.variable} font-sans`}>
      <body className={clsx(fontBelleza.className, 'text-2xl sm:text-2.5xl flex flex-col items-center')}>
        <NextIntlClientProvider messages={pick(messages, 'Navigation')}>
          <Header />
        </NextIntlClientProvider>
        {/* <BannerUnderDevelopment /> */}
        <div className='max-w-extra mx-auto'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
