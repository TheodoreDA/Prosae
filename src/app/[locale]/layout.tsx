import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import clsx from 'clsx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Belleza, Raleway } from 'next/font/google';
import { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import pick from 'lodash/pick';

const fontRaleway = Raleway({
  subsets: ["latin"],
  weight: '400',
  style: 'normal',
  variable: '--font-raleway',
});

type Props = {
  params: { locale: string };
};

export async function generateMetadata({params: { locale }}: Props): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: {
      default: "Prosae - Biographie, correction et interprétariat",
      template: "%s - Prosae"
    },
    description: t("description"),
    /*
    metadataBase: new URL('https://prosae.net'),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'fr': '/fr',
        'es': '/es',
      },
    },
     */
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
    <html lang={locale} className={`${fontRaleway.variable} font-sans`}>
      <body className={clsx(fontRaleway.className, 'text-2xl sm:text-2.5xl flex flex-col items-center')}>
        <NextIntlClientProvider messages={pick(messages, 'Navigation')}>
          <Header />
        </NextIntlClientProvider>
        <div className='max-w-extra mx-auto'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
