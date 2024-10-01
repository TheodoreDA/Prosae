import NavigationLink from '@/components/NavigationLink';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function CorrectionPage() {
  const t = useTranslations('BiographyPage');
  const tNav = useTranslations('Navigation');

  return (
    <div>
      {/* First block */}
      <div className="flex flex-row justify-between min-h-body pt-20">
        <div className="w-[35%] h-[41rem] relative">
          <Image src={'/biography/1.JPG'} fill style={{objectFit: "cover", objectPosition: "100% 55%"}} alt="Image one" />
        </div>
        <div className='w-[60%] h-[41rem] bg-primary text-justify px-24 py-14'>
          <div className='text-5xl leading-snug'>{t('title1')}</div>
          <div className='text-2.5xl leading-normal mt-8'>{t('block1')}</div>
          <div className='text-5xl mt-14'>{t('title2')}</div>
        </div>
      </div>

      {/* Second block */}
      <div className='min-h-body text-justify pt-20'>
        <div className='text-5xl'>{t('title3')}</div>
        <div className='text-2.5xl mt-10'>{t('block2')}</div>
        <div className='text-2.5xl mt-10'>{t('block3')}</div>
        <div className='w-full h-[10rem] bg-primary mt-20' />
      </div>

      {/* Third block */}
      <div className='flex flex-row justify-between min-h-body pt-10'>
        <div className='w-[53%] text-2.5xl text-justify'>
          <div className='text-5xl'>{t('title4')}</div>
          <div className='mt-5'>{t('block4')}</div>
          <div className=''>{t('block5')}</div>
          <div className='mt-10'>{t('block6')}</div>
        </div>
        <div className="w-[35%] h-[41rem] relative mt-10">
          <Image src={'/biography/3.jpg'} fill style={{objectFit: "cover", objectPosition: "100% 55%"}} alt="Image two" />
        </div>
      </div>

      {/* Fourth block */}
      <div className='flex flex-row space-x-20 min-h-body'>
        <div className='w-[60%] h-[41rem] bg-primary pl-32'>
          <div className='flex flex-col items-center w-[23rem]'>
            <div className="w-full h-[20rem] relative mt-20">
              <Image src={'/biography/3.jpg'} fill style={{objectFit: "cover", objectPosition: "center"}} alt="Image two" />
            </div>
            <div className='w-[17rem] text-5xl leading-normal text-center text-tertiary mt-10'>{t('title5')}</div>
          </div>
        </div>
        <div className='w-[25%]'>
          <div className='flex flex-col items-center w-[23rem]'>
            <div className="w-full h-[20rem] relative mt-20">
              <Image src={'/biography/4.jpg'} fill style={{objectFit: "cover", objectPosition: "center"}} alt="Image two" />
            </div>
            <div className='w-[19rem] text-5xl leading-normal text-tertiary mt-10'>{t('title6')}</div>
          </div>
        </div>
      </div>

      {/* Fifth block */}
      <div className='flex flex-row justify-end space-x-20 min-h-body'>
        <div className='w-[35%]'>
          <div className='flex flex-col items-center w-[23rem]'>
            <div className="w-full h-[20rem] relative mt-20">
              <Image src={'/biography/5.jpg'} fill style={{objectFit: "cover", objectPosition: "center"}} alt="Image two" />
            </div>
            <div className='text-5xl leading-normal text-tertiary mt-10'>{t('title7')}</div>
          </div>
        </div>
        <div className='w-[50%] h-[41rem] bg-primary pl-32'>
          <div className='flex flex-col items-center w-[23rem]'>
            <div className="w-full h-[20rem] relative mt-20">
              <Image src={'/biography/6.jpg'} fill style={{objectFit: "cover", objectPosition: "center"}} alt="Image two" />
            </div>
            <div className='w-[18rem] text-5xl leading-normal text-center text-tertiary mt-10'>{t('title8')}</div>
          </div>
        </div>
      </div>
      <div className='flex justify-center pb-32'>
        <NavigationLink href={'/contact'} className="w-64 px-10 py-4 border-2 border-black text-center text-2xl">
          {tNav('callToAction')}
        </NavigationLink>
      </div>
    </div>
  );
}
