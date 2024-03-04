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

  return <div className='flex flex-row justify-between 2xl:justify-center h-body'>
    <div className='w-1/2 lg:pr-20 flex flex-col text-5xl items-end justify-center bg-primary pr-10 space-y-4'>
      <div>{t('Why')}</div>
      <div>{t('WouldYou')}</div>
      <div>{t('NeedMy')}</div>
      <div>{t('Services')}</div>
      <div className='pt-10'>
        <NavigationLink href={"/correction"} className='px-10 py-3 mr-10 w-52 border-2 border-black text-2xl font-light'>Correction</NavigationLink>
        <NavigationLink href={"/interpretariat"} className='px-10 py-3 w-52 border-2 border-black text-2xl font-light'>Interprétariat</NavigationLink>
      </div>
    </div>
    <div className='w-1/2 relative'>
      <Image src={"/placeholder.png"} fill alt='placeholder'></Image>
    </div>
  </div>;
}
