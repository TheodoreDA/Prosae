import NavigationLink from '@/components/NavigationLink';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function InterpretariatPage() {
  const t = useTranslations('InterpretariatPage');
  const tNav = useTranslations('Navigation');

  const highlightArrows = (text: string) => {
    return text.split('').map((char, index) => {
      return char === '→' || char === '↔' ? (
        <span key={index} className="text-secondary">{char}</span>
      ) : (
        char
      );
    });
  };

  return (
    <div>
      {/* First block */}
      <div className='flex flex-row justify-between min-h-big-body pt-20'>
        <div className='w-[50%]'>
          <div className='bg-primary px-24 py-10'>
            <div className="w-full h-[41rem] relative">
              <Image src={'/interpretariat/1.jpg'} fill style={{objectFit: "cover", objectPosition: "100% 65%"}} alt="Image one" />
            </div>
          </div>
          <div className='text-5xl leading-tight mt-8'>{t('title1')}</div>
          <div className='leading-normal text-justify mt-5'>{t('block2')}</div>
        </div>
        <div className='flex flex-col items-center w-[45%]'>
          <div className='self-start text-5xl leading-normal mt-10'>
            <div>{t('block1')}</div>
            <div>{highlightArrows(t('frenchEnglish'))}</div>
            <div>{highlightArrows(t('frenchSpanish'))}</div>
          </div>
          <div className="w-full h-[43rem] relative mt-20">
            <Image src={'/interpretariat/2.JPG'} fill style={{objectFit: "cover", objectPosition: "100% 25%"}} alt="Image two" />
          </div>
        </div>
      </div>
      <div className="flex justify-center h-32 mt-5">
        <div className='bg-primary absolute h-32 w-full max-w-std-screen' />
      </div>
      
      {/* Second block */}
      <div className='min-h-body text-justify pt-20'>
        <div className='text-5xl'>{t('title2')}</div>
        <div className='mt-10'>{t('block3')}</div>
        <ul className='list-disc ml-20 mt-8 space-y-8'>
          <li>{highlightArrows(t('block4'))}</li>
          <li>{highlightArrows(t('block5'))}</li>
        </ul>
        <div className='mt-8'>{t('block6')}</div>
        <div className='flex justify-center py-28'>
          <NavigationLink href={'/contact'} className="w-64 bg-secondary text-2xl text-center text-white rounded-2xl px-10 py-4">
            {tNav('askForAFreeEstimate')}
          </NavigationLink>
        </div>
      </div>
    </div>
  );
}
