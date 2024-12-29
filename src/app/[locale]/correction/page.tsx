import NavigationLink from '@/components/NavigationLink';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function CorrectionPage() {
  const t = useTranslations('CorrectionPage');
  const tNav = useTranslations('Navigation');

  return (
    <div>
      {/* First block */}
      <div className="flex flex-row justify-between lg:pt-8 xl:pt-12">
        <div className="lg:block hidden w-2/5 xl:w-1/3 h-[42rem] xl:h-[45rem] relative">
          <Image src={'/correction/1.JPG'} fill style={{objectFit: "cover", objectPosition: "top"}} alt="Image one" />
        </div>
        <div className='flex flex-col px-5 sm:px-10 lg:px-0 lg:w-[55%]'>
          <div className='lg:order-2 text-3xl sm:text-4.5xl xl:text-6xl leading-normal text-center lg:text-start sm:px-10 md:px-20 lg:px-0 lg:mt-10'>{t('block1')}</div>
          <div className="w-full h-[14rem] sm:h-[18rem] md:h-[20rem] lg:h-[30rem] relative mt-5 lg:mt-0 lg:pb-0">
            <Image src={'/correction/2.JPG'} fill style={{objectFit: "cover", objectPosition: "left"}} alt="Image two" />
          </div>
        </div>
      </div>

      {/* Second block */}
      <div className="flex flex-col lg:flex-row pt-8 sm:pt-14">
        <div className='flex flex-col items-center lg:items-start lg:w-1/2 px-5 sm:px-10 xl:px-14 2xl:pr-20 2xl:pl-0 lg:pt-14'>
          <div className='text-3xl sm:text-4.5xl xl:text-5xl'>{t('title1')}</div>
          <div className='sm:w-[550px] lg:w-full h-[380px] sm:h-full grid grid-cols-2 grid-rows-4 gap-x-4 sm:gap-x-12 xl:gap-x-16 text-base sm:text-xl text-center text-white pt-5 sm:pt-10 md:pt-14 xl:pt-16'>
            <div className='bg-secondary col-start-1 row-start-1 self-center rounded-2xl px-2 py-2 sm:py-4'>{t('spelling')}<br />{t('grammar')}<br />{t('conjugation')}</div>
            <div className='bg-secondary col-start-2 row-start-2 self-center rounded-2xl px-2 py-2 sm:py-4'>{t('syntax')}<br />{t('orthotypography')}<br />{t('harmonisation')}</div>
            <div className='bg-secondary col-start-1 row-start-3 self-center rounded-2xl px-2 py-2 sm:py-4'>{t('internalCoherence')}</div>
            <div className='bg-secondary col-start-2 row-start-4 self-center rounded-2xl px-2 py-2 sm:py-4'>{t('pageLayout')}<br />{t('rewording')}</div>
          </div>
        </div>
        
        <div className='flex flex-col lg:w-1/2 bg-primary text-justify text-xl sm:text-[length:inherit] pt-5 pb-8 sm:py-14 px-8 sm:px-12 mt-16 lg:mt-0 mx-5 sm:mx-10 md:mx-20 lg:mx-0'>
          <div className='text-3xl sm:text-4.5xl xl:text-5xl'>{t('title2')}</div>
          <div className='leading-snug pt-6 sm:pt-10 md:pt-16'>{t('block2')}</div>
          <div className='leading-snug pt-4 sm:pt-6 md:pt-10'>{t('block3')}</div>
          <div className='text-2xl sm:text-3.5xl leading-snug pt-4 sm:pt-6 md:pt-10'>{t('block4')}</div>
        </div>
      </div>

      <div className='flex justify-center py-16 md:py-20 xl:py-32'>
        <NavigationLink href={'/contact'} className="max-w-64 px-10 py-1 border-[3px] border-black text-center text-2xl">
          {tNav('askForAFreeEstimate')}
        </NavigationLink>
      </div>
    </div>
  );
}
