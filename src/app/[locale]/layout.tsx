import { getTranslations, setRequestLocale } from 'next-intl/server';
import clsx from 'clsx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Belleza } from 'next/font/google';
import { Metadata } from 'next';

const fontBelleza = Belleza({
  subsets: ["latin"],
  weight: '400',
  style: 'normal',
  variable: '--font-belleza',
});

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;

  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    title: "Prosae",
    description: t("description"),
    keywords: ["haha", "hoho", "hihi"],
    authors: [{ name: "Jeanne Sabiron", url: "https://prosae.net" }],
  };
}

type LayoutProps = {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
};

export default async function LocaleLayout(props: LayoutProps) {
  const { children } = props;
  const { locale } = await props.params;

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${fontBelleza.variable} font-sans`}>
      <body className={clsx(fontBelleza.className, 'text-2.5xl flex flex-col items-center')}>
        <Header />
        <div className='max-w-extra mx-auto'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
