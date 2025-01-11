import NavigationLink from '@/components/NavigationLink';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function InterpretariatPage() {
  const t = useTranslations('InterpretariatPage');
  const tNav = useTranslations('Navigation');

  return (
    <div>
      {/* First block */}
      <div className='flex flex-col lg:flex-row justify-between px-5 sm:px-10 lg:px-0 lg:pt-10 xl:pt-20'>
        <div className='lg:order-2 flex flex-col items-center lg:w-[46%]'>
          <div className='self-start text-3.5xl sm:text-5xl leading-tight md:leading-normal mt-5 xl:mt-10'>
            <h1 className='text-center lg:text-left'>
              {t.rich('iInterpretForYou', {
                br: () => <br className='hidden lg:block' />,
                nowrap: (content) => <span className='text-nowrap'>{content}</span>,
                orange: (arrows) => <span className='text-secondary'>{arrows}</span>
              })}
            </h1>
          </div>
          <div className="w-full h-[43rem] relative hidden lg:block mt-10 xl:mt-20">
            <Image src={'/interpretariat/2.JPG'} fill style={{objectFit: "cover", objectPosition: "100% 25%"}} alt="Image two" />
          </div>
        </div>
        <div className='lg:order-1 lg:w-[50%]'>
          <div className='bg-primary px-10 sm:px-16 md:px-36 lg:px-16 xl:px-24 py-10 mt-5 lg:mt-0'>
            <div className="w-full h-[25rem] sm:h-[35rem] md:h-[39rem] xl:h-[41rem] relative">
              <Image src={'/interpretariat/1.jpg'} fill style={{objectFit: "cover", objectPosition: "100% 85%"}} alt="Image one" />
            </div>
          </div>
          <div className='lg:ml-5 2xl:ml-0'>
            <h2 className='text-3.5xl sm:text-5xl leading-tight mt-8'>
              {t.rich('title1', { nowrap: (content) => <span className='text-nowrap'>{content}</span> })}
            </h2>
            <p className='leading-normal lg:text-justify mt-5'>
              {t.rich('block2', { nowrap: (content) => <span className='text-nowrap'>{content}</span> })}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-24 md:h-32 mt-5">
        <div className='bg-primary absolute h-24 md:h-32 w-full max-w-std-screen' />
      </div>
      
      {/* Second block */}
      <div className='lg:text-justify pt-14 md:pt-20 mx-5 sm:mx-10 2xl:mx-0'>
        <h2 className='text-5xl'>
          {t.rich('title2', { nowrap: (content) => <span className='text-nowrap'>{content}</span> })}
        </h2>
        <p className='mt-10'>{t('block3')}</p>
        <ul className='list-disc ml-20 mt-8 space-y-8'>
          <li>
            {t.rich('block4', {
              orange: (arrows) => <span className='text-secondary'>{arrows}</span>,
              nowrap: (content) => <span className='text-nowrap'>{content}</span>,
            })}
          </li>
          <li>
            {t.rich('block5', {
              orange: (arrows) => <span className='text-secondary'>{arrows}</span>,
              nowrap: (content) => <span className='text-nowrap'>{content}</span>,
            })}
          </li>
        </ul>
        <p className='mt-8'>{t('block6')}</p>
        <div className='flex justify-center py-20 lg:py-28'>
          <NavigationLink href={'/contact'} className="w-64 bg-secondary text-2xl text-center text-white rounded-2xl px-10 py-4">
            {tNav('askForAFreeEstimate')}
          </NavigationLink>
        </div>
      </div>
    </div>
  );
}
