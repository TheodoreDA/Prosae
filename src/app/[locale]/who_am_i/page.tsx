import NavigationLink from '@/components/NavigationLink';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function WhoAmIPage() {
  const t = useTranslations('WhoAmIPage');
  const tNav = useTranslations('Navigation');

  return (
    <div>
      {/* First block */}
      <div className="flex flex-col pt-4">
        <div className="w-full h-[200px] sm:h-[225px] md:h-[280px] lg:h-[380px] xl:h-[450px] relative">
          <Image src={'/whoAmI/1.JPG'} fill style={{objectFit: "cover", objectPosition: "top"}} alt="Image one" />
        </div>
        <div className='flex flex-col xl:flex-row items-center xl:items-start justify-between mt-6 xl:mt-12'>
          <div className='order-2 xl:order-1 w-5/6 md:w-4/5 lg:3/4 xl:w-[42%] text-wrap text-justify leading-snug text-2xl sm:text-3xl mx-14 2xl:mx-0 mt-4 sm:mt-6 lg:mt-10 xl:mt-0'>{t('block1')}</div>
          <div className='order-1 xl:order-2 w-4/6 sm:w-3/4 xl:w-2/5 mx-14 2xl:mx-0 text-center xl:text-right leading-snug text-4xl sm:text-5xl font-medium'>{t('block2')}</div>
        </div>
      </div>

      {/* Second block */}
      <div className='pt-10'>
        <div className='w-[45%] max-w-[32rem] h-[585px] md:h-[600px] lg:h-[630px] xl:h-[690px] relative float-left mr-10'>
          <Image src={'/whoAmI/2.JPG'} fill style={{objectFit: "cover", objectPosition: "top"}} alt="Image two" />
        </div>
        <div className='w-full text-justify text-2xl sm:text-3xl px-5 2xl:px-0 lg:px-10'>
          <div className='hidden md:block text-5xl font-semibold lg:mt-4'>{t('title1')}</div>
          <div className='md:mt-6 xl:mt-10'>{t('block3')}</div>
          <div className='mt-6'>{t('block4')}</div>
          <div className='mt-6'>{t('block5')}</div>
          <div className='mt-6'>{t('block6')}</div>
        </div>
      </div>

      {/* Third block */}
      <div className='items-center'>
        <div className='flex items-center justify-center py-10 lg:px-24 my-10 sm:my-14 md:my-20 mx-14'>
          <div className='bg-primary absolute min-h-28 sm:min-h-48 md:min-h-56 lg:min-h-40 w-full max-w-std-screen' />
          <NavigationLink className='m-0 z-20 text-nowrap text-2xl sm:text-3xl border-2 border-black px-8 sm:px-14 py-3 sm:py-5' href={"/biography"}>{tNav('callToAction')}</NavigationLink>
          <div className='z-20 w-full border-b-1 border-black ml-14' />
        </div>

        <div className='grid grid-cols-6 lg:grid-cols-16 grid-rows-4 lg:grid-rows-3 lg:gap-y-10 gap-y-5 mb-8 sm:my-14 mx-4 lg:mx-10'>
          <div className='row-start-1 rounded-full w-10 sm:w-16 lg:w-20 h-10 sm:h-16 lg:h-20 self-center lg:self-end bg-secondary' />
          <div className='row-start-1 col-start-4 lg:col-start-4 col-span-3 lg:col-span-6 text-4xl sm:text-4.5xl md:text-5xl font-semibold self-center lg:mt-4'>{t('mySkills')}</div>

          <div className='row-start-1 lg:row-start-2 rounded-full w-10 sm:w-16 lg:w-20 h-10 sm:h-16 lg:h-20 self-center bg-tertiary' />
          <div className='row-start-2 lg:col-start-4 col-span-3 flex justify-center items-center'>
            <div className='w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 relative'>
              <Image src={"/logos/logo-voltaire.jpg"} fill alt='logo-voltaire' />
            </div>
          </div>
          <div className='row-start-3 lg:row-start-2 col-span-3 lg:col-span-5 flex justify-center items-center'>
            <div className='w-40 sm:w-60 md:w-80 h-16 sm:h-24 md:h-32 relative'>
              <Image src={"/logos/logo-eflc.jpg"} fill alt='logo-eflc' />
            </div>
          </div>
          <div className='row-start-4 lg:row-start-2 col-span-3 lg:col-span-5 flex justify-center items-center'>
            <div className='w-24 sm:w-28 lg:w-36 h-24 sm:h-28 lg:h-36 relative'>
              <Image src={"/logos/logo-plume-academie.png"} fill alt='logo-plume-academie' />
            </div>
          </div>

          <div className='row-start-1 lg:row-start-3 rounded-full w-10 sm:w-16 lg:w-20 h-10 sm:h-16 lg:h-20 self-center bg-primary' />
          <div className='row-start-2 lg:row-start-3 col-span-2 lg:col-span-3 col-start-4 lg:col-start-4 text-xl sm:text-2xl self-center'>{t('voltaire')}</div>
          <div className='row-start-3 lg:row-start-3 col-span-2 lg:col-span-5 col-start-4 lg:col-start-auto text-xl sm:text-2xl self-center'>{t('eflc')}</div>
          <div className='row-start-4 lg:row-start-3 col-span-2 lg:col-span-4 col-start-4 lg:col-start-auto text-xl sm:text-2xl self-center lg:mt-[33px]'>{t('biography')}</div>
        </div>
      </div>
    </div>
  );
}
