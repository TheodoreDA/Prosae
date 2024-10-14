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
          <div className='leading-normal mt-8'>{t('block1')}</div>
          <div className='text-4xl mt-14'>{t('title2')}</div>
        </div>
      </div>

      {/* Second block */}
      <div className='min-h-mini-body text-justify'>
        <div className='text-5xl'>{t('title3')}</div>
        <div className='mt-10'>{t('block2')}</div>
        <div className='mt-10'>{t('block3')}</div>
        <div className="flex justify-center h-40 mt-20">
          <div className='bg-primary absolute h-32 w-full max-w-std-screen' />
        </div>
      </div>

      {/* Third block */}
      <div className='flex flex-row justify-between min-h-body pt-10'>
        <div className='w-[53%] text-justify'>
          <div className='text-5xl'>{t('title4')}</div>
          <div className='mt-5'>{t('block4')}</div>
          <div>{t('block5')}</div>
          <div className='mt-10'>{t('block6')}</div>
        </div>
        <div className="w-[35%] h-[41rem] relative mt-10">
          <Image src={'/biography/3.jpg'} fill style={{objectFit: "cover", objectPosition: "center"}} alt="Image two" />
        </div>
      </div>

      {/* Fourth block */}
      <div className='flex flex-row justify-between min-h-body text-5xl leading-normal text-center'>
        <div className='w-[45%] h-[41rem] bg-primary flex justify-center'>
          <div className='flex flex-col items-center w-[23rem]'>
            <div className="w-full h-[20rem] relative mt-20">
              <Image src={'/biography/3.jpg'} fill style={{objectFit: "cover", objectPosition: "center"}} alt="Image three" />
            </div>
            <div className='w-[17rem] mt-10'>{t('title5')}</div>
          </div>
        </div>
        <div className='w-[45%] flex justify-center'>
          <div className='flex flex-col items-center w-[23rem]'>
            <div className="w-full h-[20rem] relative mt-20">
              <Image src={'/biography/4.jpg'} fill style={{objectFit: "cover", objectPosition: "center"}} alt="Image four" />
            </div>
            <div className='w-[19rem] mt-10'>{t('title6')}</div>
          </div>
        </div>
      </div>

      {/* Fifth block */}
      <div className='flex flex-row justify-between min-h-body text-5xl leading-normal'>
        <div className='w-[45%] flex justify-center'>
          <div className='flex flex-col items-center w-[23rem]'>
            <div className="w-full h-[20rem] relative mt-20">
              <Image src={'/biography/5.jpg'} fill style={{objectFit: "cover", objectPosition: "center"}} alt="Image five" />
            </div>
            <div className='mt-10'>{t('title7')}</div>
          </div>
        </div>
        <div className='w-[45%] h-[41rem] bg-primary flex justify-center'>
          <div className='flex flex-col items-center w-[23rem]'>
            <div className="w-full h-[20rem] relative mt-20">
              <Image src={'/biography/6.jpg'} fill style={{objectFit: "cover", objectPosition: "center"}} alt="Image six" />
            </div>
            <div className='w-[18rem] mt-10'>{t('title8')}</div>
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
