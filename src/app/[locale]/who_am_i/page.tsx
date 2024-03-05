import NavigationLink from '@/components/NavigationLink';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function WhoAmIPage() {

  const t = useTranslations('WhoAmIPage');
  const tNav = useTranslations('Navigation');

  return <div className='flex flex-row h-body'>
    <div className='w-1/4 h-body relative'>
      <Image src={"/placeholder.png"} fill alt='placeholder' />
    </div>
    <div className='overflow-y-scroll w-3/4 px-40 py-10'>
      <div className='text-justify text-xl font-light'>
        <div className='text-7xl font-medium'>{tNav("whoAmI")}</div>
        <div className='mt-12'>{t("block1")}</div>
        <div className='mt-8'>{t("block2")}</div>
        <div className='mt-8'>{t("block3")}</div>
        <div className='mt-8'>{t("block4")}</div>
        <div className='mt-8'>{t("block5")}</div>
        <div className='mt-36 flex flex-row items-center space-x-20'>
          <NavigationLink href={"/who_am_i"} className='px-10 py-3 flex-none w-72 border-2 border-black text-2xl font-light'>{t('payMePlease')}</NavigationLink>
          <div className='h-0 grow border border-black' />
        </div>
      </div>
    </div>
  </div>;
}
