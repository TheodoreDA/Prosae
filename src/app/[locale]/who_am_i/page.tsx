import NavigationLink from '@/components/NavigationLink';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function WhoAmIPage() {
  const t = useTranslations('WhoAmIPage');
  const tNav = useTranslations('Navigation');

  return (
    <div>
      {/* First block */}
      <div className="flex flex-col min-h-body pt-12">
        <div className="w-full h-[28rem] relative">
          <Image src={'/whoAmI/1.JPG'} fill style={{objectFit: "cover", objectPosition: "top"}} alt="Image one" />
        </div>
        <div className='flex justify-between mt-12 text-tertiary'>
          <div className='w-[42%] text-justify leading-snug text-3xl'>{t('block1')}</div>
          <div className='w-2/5 text-right leading-snug text-5xl font-medium'>{t('block2')}</div>
        </div>
      </div>

      {/* Second block */}
      <div className='flex flex-row min-h-body items-center'>
        <div className='w-[32rem] h-[43rem] relative'>
          <Image src={'/whoAmI/2.JPG'} fill style={{objectFit: "cover", objectPosition: "top"}} alt="Image two" />
        </div>
        <div className='flex flex-col h-[43rem] w-full place-content-between text-justify text-3xl ml-10'>
          <div className='text-6xl font-semibold'>{t('title1')}</div>
          <div className='mt-12'>{t('block3')}</div>
          <div className='mt-10'>{t('block4')}</div>
          <div className='mt-10'>{t('block5')}</div>
        </div>
      </div>

      {/* Third block */}
      <div className='min-h-body items-center'>
        <div className='text-3xl text-justify'>{t('block6')}</div>
        <div className='bg-primary flex justify-center items-center space-x-14 py-10 mt-10'>
          <NavigationLink className='text-3xl border-2 border-black ml-20 px-14 py-5' href={"/biography"}>{t('callToAction')}</NavigationLink>
          <div className='w-[25rem] border-b-1 border-black' />
        </div>
        <div className='grid grid-cols-16 grid-rows-3 gap-y-10 mt-14'>
          <div className='row-start-1 rounded-full w-20 h-20 bg-secondary' />
          <div className='row-start-1 col-start-4 col-span-4 text-4xl font-semibold self-center'>{t('mySkills')}</div>

          <div className='row-start-2 rounded-full w-20 h-20 bg-tertiary' />
          <div className='row-start-2 col-start-4 col-span-3 w-20 h-20 relative'>
            <Image src={"/logos/logo-voltaire.jpg"} fill alt='logo-voltaire' />
          </div>
          <div className='row-start-2 col-span-5  w-52 h-20 relative'>
            <Image src={"/logos/logo-eflc.jpg"} fill alt='logo-voltaire' />
          </div>
          <div className='row-start-2 col-span-5  w-20 h-20 relative'>
            <Image src={"/placeholder.png"} fill alt='logo-voltaire' />
          </div>

          <div className='row-start-3 rounded-full w-20 h-20 bg-primary' />
          <div className='row-start-3 col-span-3 col-start-4 text-2xl self-center'>{t('voltaire')}</div>
          <div className='row-start-3 col-span-5 text-2xl self-center'>{t('eflc')}</div>
          <div className='row-start-3 col-span-5 text-2xl self-center'>{t('biography')}</div>
        </div>
      </div>
    </div>
  );
}
