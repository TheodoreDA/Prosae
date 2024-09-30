import NavigationLink from '@/components/NavigationLink';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function CorrectionPage() {
  const t = useTranslations('CorrectionPage');
  const tNav = useTranslations('Navigation');

  return (
    <div>
      {/* First block */}
      <div className="flex flex-row justify-between min-h-body pt-12">
        <div className="w-1/3 h-[45rem] relative">
          <Image src={'/correction/1.JPG'} fill style={{objectFit: "cover", objectPosition: "center"}} alt="Image one" />
        </div>
        <div className='w-[55%]'>
          <div className="w-full h-[30rem] relative">
            <Image src={'/correction/2.JPG'} fill style={{objectFit: "cover", objectPosition: "left"}} alt="Image two" />
          </div>
          <div className='text-6xl leading-normal mt-10'>{t('block1')}</div>
        </div>
      </div>

      {/* Second block */}
      <div className="flex flex-row min-h-mini-body pt-8">
        <div className='flex flex-col items-center w-1/2 pr-12 pt-14 text-white'>
          <div className='text-5xl text-black'>{t('title1')}</div>
          <div className='w-full flex pt-16 text-xl text-center'>
            <div className='w-1/2'>
              <div className='bg-secondary rounded-2xl py-4 ml-10 mr-5'>{t('spelling')}<br />{t('grammar')}<br />{t('conjugation')}</div>
              <div className='bg-secondary rounded-2xl py-4 ml-10 mr-5 mt-28 px-10'>{t('internalCoherence')}</div>
            </div>
            <div className='w-1/2'>
              <div className='bg-secondary rounded-2xl py-4 ml-10 mr-5 mt-28'>{t('syntax')}<br />{t('orthotypography')}<br />{t('harmonisation')}</div>
              <div className='bg-secondary rounded-2xl py-4 ml-10 mr-5 mt-28 px-2'>{t('pageLayout')}<br />{t('rewording')}</div>
            </div>
          </div>
        </div>
        
        <div className='w-1/2 bg-primary px-12 py-14 text-justify'>
          <div className='text-5xl'>{t('title2')}</div>
          <div className='text-3xl leading-snug pt-16'>{t('block2')}</div>
          <div className='text-3xl leading-snug pt-10'>{t('block3')}</div>
          <div className='text-3xl leading-snug pt-10'>{t('block4')}</div>
        </div>
      </div>

      <div className='flex justify-center py-32'>
        <NavigationLink href={'/contact'} className="w-64 px-10 py-1 border-[3px] border-black text-center text-2xl">
          {tNav('askForAFreeEstimate')}
        </NavigationLink>
      </div>
    </div>
  );
}
