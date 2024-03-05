import NavigationLink from '@/components/NavigationLink';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('HomePage');
  const tNav = useTranslations('Navigation');

  return (
    <div className="flex flex-col">
      {/* First block */}
      <div className="flex flex-row justify-between 2xl:justify-center h-body">
        <div className="w-1/2 lg:pr-20 flex flex-col text-5xl items-end justify-center bg-primary pr-10 space-y-4">
          <div>{t('why')}</div>
          <div>{t('wouldYou')}</div>
          <div>{t('needMy')}</div>
          <div>{t('services')}</div>
          <div className="pt-10">
            <NavigationLink
              href={'/correction'}
              className="px-10 py-3 mr-10 w-52 border-2 border-black text-2xl font-light"
            >
              {tNav('correction')}
            </NavigationLink>
            <NavigationLink
              href={'/interpretariat'}
              className="px-10 py-3 w-52 border-2 border-black text-2xl font-light"
            >
              {tNav('interpretariat')}
            </NavigationLink>
          </div>
        </div>
        <div className="w-1/2 relative">
          <Image src={'/placeholder.png'} fill alt="placeholder"></Image>
        </div>
      </div>

      {/* Second block */}
      <div className="flex flex-col items-center h-body">
        <div className="mt-10 mb-16 text-7xl font-light">{t('howDoIWork')}</div>
        <div className="flex flex-row space-x-20">
          <div className="flex flex-col items-center relative max-w-72">
            <Image
              src={'/open-book.png'}
              width={120}
              height={120}
              alt="placeholder"
            />
            <div className="my-5 text-2xl font-medium">{t('planning')}</div>
            <div className="text-justify">{t('planningDesc')}</div>
          </div>
          <div className="flex flex-col items-center relative max-w-72">
            <Image
              src={'/team-building.png'}
              width={120}
              height={120}
              alt="placeholder"
            />
            <div className="my-5 text-2xl font-medium">{t('building')}</div>
            <div className="text-justify">{t('buildingDesc')}</div>
          </div>
          <div className="flex flex-col items-center relative max-w-72">
            <Image
              src={'/support-24-7.png'}
              width={120}
              height={120}
              alt="placeholder"
            />
            <div className="my-5 text-2xl font-medium">{t('consultation')}</div>
            <div className="text-justify">{t('consultationDesc')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
