import Carousel, { CarouselImage } from '@/components/Carousel';
import NavigationLink from '@/components/NavigationLink';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function CorrectionPage() {
  const t = useTranslations('BiographyPage');
  const tNav = useTranslations('Navigation');

  const images: CarouselImage[] = [
    {
      src: "/biography/3.jpg",
      desc: t('title5')
    },
    {
      src: "/biography/4.jpg",
      desc: t('title6')
    },
    {
      src: "/biography/5.jpg",
      desc: t('title7')
    },
    {
      src: "/biography/6.jpg",
      desc: t('title8')
    },
  ];

  return (
    <div>
      {/* First block */}
      <div className="md:flex justify-between md:pt-5 lg:pt-10 xl:pt-20">
        <div className="md:w-[35%] h-[30rem] sm:h-[35rem] md:h-[41rem] lg:h-[38rem] relative mx-12 sm:mx-32 md:mx-0 md:ml-5 2xl:ml-0">
          <Image src={'/biography/1.JPG'} fill className='object-cover object-center'  alt="Image one" />
        </div>
        <div className='md:w-[58%] bg-primary text-justify mt-10 md:mt-0 px-5 sm:px-16 md:px-10 lg:px-16 xl:px-24 py-5 lg:py-8 xl:py-14'>
          <div className='text-4xl lg:text-5xl leading-tight'>{t('title1')}</div>
          <div className='leading-tight md:leading-normal mt-8'>{t('block1')}</div>
          <div className='text-3xl lg:text-4xl mt-10'>{t('title2')}</div>
        </div>
      </div>

      {/* Second block */}
      <div className='text-justify px-5 sm:px-10 md:px-5 2xl:px-0 mt-10'>
        <div className='text-4xl sm:text-5xl'>{t('title3')}</div>
        <div className='leading-tight md:leading-normal mt-6 md:mt-10'>{t('block2')}</div>
        <div className='leading-tight md:leading-normal mt-6 md:mt-10'>{t('block3')}</div>
        <div className="flex justify-center h-24 sm:h-32 my-16 sm:my-20">
          <div className='bg-primary absolute h-24 sm:h-32 w-full max-w-std-screen' />
        </div>
      </div>

      {/* Third block */}
      <div className='sm:min-h-[41rem]'>
        <div className="sm:w-[40%] xl:w-[35%] h-[32rem] sm:h-[41rem] relative sm:float-right ml-5 mr-5 sm:mr-10 md:mr-5 md:ml-10">
          <Image src={'/biography/2.jpg'} fill style={{objectFit: "cover", objectPosition: "center"}} alt="Image two" />
        </div>
        <div className='w-full text-justify px-5 sm:px-10 md:px-5 2xl:px-0 mt-5 sm:mt-0'>
          <div className='text-4xl md:text-5xl'>{t('title4')}</div>
          <div className='leading-tight md:leading-normal mt-5'>{t('block4')}</div>
          <div className='leading-tight md:leading-normal mt-5 sm:mt-0'>{t('block5')}</div>
          <div className='leading-tight md:leading-normal mt-6 md:mt-10'>{t('block6')}</div>
        </div>
      </div>

      <Carousel className='md:hidden mt-10' images={images} />

      {/* Fourth block */}
      <div className='hidden md:flex flex-row justify-between text-4xl lg:text-5xl leading-normal mt-10'>
        <div className='w-[45%] h-[41rem] bg-primary flex justify-center'>
          <div className='flex flex-col items-center w-3/4'>
            <div className="w-full h-[20rem] relative mt-20">
              <Image src={'/biography/3.jpg'} fill style={{objectFit: "cover", objectPosition: "center"}} alt="Image three" />
            </div>
            <div className='w-[17rem] mt-10'>{t('title5')}</div>
          </div>
        </div>
        <div className='w-[45%] flex justify-center'>
          <div className='flex flex-col items-center w-3/4'>
            <div className="w-full h-[20rem] relative mt-20">
              <Image src={'/biography/4.jpg'} fill style={{objectFit: "cover", objectPosition: "center"}} alt="Image four" />
            </div>
            <div className='w-[19rem] mt-10'>{t('title6')}</div>
          </div>
        </div>
      </div>

      {/* Fifth block */}
      <div className='hidden md:flex flex-row justify-between text-4xl lg:text-5xl leading-normal'>
        <div className='w-[45%] flex justify-center'>
          <div className='flex flex-col items-center w-3/4'>
            <div className="w-full h-[20rem] relative mt-20">
              <Image src={'/biography/5.jpg'} fill style={{objectFit: "cover", objectPosition: "center"}} alt="Image five" />
            </div>
            <div className='w-[17rem] lg:w-[22rem] mt-10'>{t('title7')}</div>
          </div>
        </div>
        <div className='w-[45%] h-[41rem] bg-primary flex justify-center'>
          <div className='flex flex-col items-center w-3/4'>
            <div className="w-full h-[20rem] relative mt-20">
              <Image src={'/biography/6.jpg'} fill style={{objectFit: "cover", objectPosition: "center"}} alt="Image six" />
            </div>
            <div className='w-[18rem] mt-10'>{t('title8')}</div>
          </div>
        </div>
      </div>

      <div className='flex justify-center py-16 lg:py-20 xl:py-32'>
        <NavigationLink href={'/contact'} className="w-64 px-10 py-4 border-2 border-black text-center text-2xl">
          {tNav('callToAction')}
        </NavigationLink>
      </div>
    </div>
  );
}
