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
          <h2 className='order-2 xl:order-1 w-5/6 md:w-4/5 lg:3/4 xl:w-[42%] text-wrap lg:text-justify leading-snug text-2xl sm:text-3xl mx-14 2xl:mx-0 mt-4 sm:mt-6 lg:mt-10 xl:mt-0'>
            {t.rich('block1', { nowrap: (content) => <span className='text-nowrap'>{content}</span> })}
          </h2>
          <h1 className='order-1 xl:order-2 w-4/6 sm:w-3/4 xl:w-2/5 mx-14 2xl:mx-0 text-center xl:text-right leading-snug text-4xl sm:text-5xl font-medium'>
            {t.rich('block2', { nowrap: (content) => <span className='text-nowrap'>{content}</span> })}
          </h1>
        </div>
      </div>

      {/* Second block */}
      <div className='pt-10'>
        <div className='w-[45%] max-w-[32rem] h-[585px] md:h-[605px] lg:h-[630px] xl:h-[720px] relative float-left mr-10'>
          <Image src={'/whoAmI/2.JPG'} fill style={{objectFit: "cover", objectPosition: "top"}} alt="Image two" />
        </div>
        <div className='w-full lg:text-justify text-2xl sm:text-3xl 2xl:px-0 px-16'>
          <h3 className='hidden md:block text-5xl font-semibold lg:mt-4'>
            {t.rich('title1', { nowrap: (content) => <span className='text-nowrap'>{content}</span> })}
          </h3>
          <p className='md:mt-6 xl:mt-10'>
            {t.rich('block3', { nowrap: (content) => <span className='text-nowrap'>{content}</span> })}
          </p>
          <p className='mt-6'>
          {t.rich('block4', { nowrap: (content) => <span className='text-nowrap'>{content}</span> })}
          </p>
          <p className='mt-6'>
            {t.rich('block5', { nowrap: (content) => <span className='text-nowrap'>{content}</span> })}
          </p>
          <p className='mt-6'>
            {t.rich('block6', { nowrap: (content) => <span className='text-nowrap'>{content}</span> })}
          </p>
        </div>
      </div>

      {/* Third block */}
      <div className='items-center'>
        <div className='flex items-center justify-center py-10 lg:px-24 my-10 sm:my-14 md:my-20 mx-14'>
          <div className='bg-primary absolute min-h-28 sm:min-h-48 md:min-h-56 lg:min-h-40 w-full max-w-std-screen' />
          <NavigationLink className='m-0 z-20 text-nowrap text-2xl sm:text-3xl border-2 border-black px-8 sm:px-14 py-3 sm:py-5' href={"/biography"}>{tNav('callToAction')}</NavigationLink>
          <div className='z-20 w-full border-b-1 border-black ml-14' />
        </div>

        <div className='grid grid-cols-6 lg:grid-cols-16 grid-rows-4 lg:grid-rows-3 lg:gap-y-10 gap-y-5 mb-8 sm:my-14 mx-16 lg:mx-10 px-auto'>
          <div className='row-start-1 rounded-full w-10 sm:w-16 lg:w-20 h-10 sm:h-16 lg:h-20 self-center lg:self-end bg-secondary' />
          <h1 className='row-start-1 col-start-4 lg:col-start-4 col-span-3 lg:col-span-6 text-4xl sm:text-4.5xl md:text-5xl font-semibold self-center lg:mt-4'>{t('mySkills')}</h1>

          <div className='row-start-1 lg:row-start-2 rounded-full w-10 sm:w-16 lg:w-20 h-10 sm:h-16 lg:h-20 self-center bg-tertiary' />
          <div className='row-start-2 lg:col-start-4 col-span-3 lg:col-span-2 flex lg:justify-start justify-center items-center'>
            <div className='w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 relative'>
              <Image src={"/logos/logo-voltaire.jpg"} fill alt='logo-voltaire' />
            </div>
          </div>
          <div className='row-start-3 lg:row-start-2 col-span-3 lg:col-span-5 flex lg:justify-start justify-center items-center'>
            <div className='w-40 sm:w-60 md:w-80 h-16 sm:h-24 md:h-32 relative'>
              <Image src={"/logos/logo-eflc.jpg"} fill alt='logo-eflc' />
            </div>
          </div>
          <div className='row-start-4 lg:row-start-2 col-span-3 lg:col-span-5 flex lg:justify-start justify-center items-center'>
            <div className='w-24 sm:w-28 lg:w-36 h-24 sm:h-28 lg:h-36 relative'>
              <Image src={"/logos/logo-plume-academie.png"} fill alt='logo-plume-academie' />
            </div>
          </div>

          <div className='row-start-1 lg:row-start-3 rounded-full w-10 sm:w-16 lg:w-20 h-10 sm:h-16 lg:h-20 self-center bg-primary' />
          <h2 className='row-start-2 lg:row-start-3 col-span-2 lg:col-span-3 col-start-4 lg:col-start-4 text-xl sm:text-2xl self-center'>{t('voltaire')}</h2>
          <h2 className='row-start-3 lg:row-start-3 col-span-2 lg:col-span-4 col-start-4 lg:col-start-auto text-xl sm:text-2xl self-center'>{t('eflc')}</h2>
          <h2 className='row-start-4 lg:row-start-3 col-span-2 lg:col-span-4 col-start-4 lg:col-start-auto text-xl sm:text-2xl self-center lg:mt-[33px]'>{t('biography')}</h2>
        </div>
      </div>
    </div>
  );
}
