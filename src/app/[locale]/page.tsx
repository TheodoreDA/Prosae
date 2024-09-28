import NavigationLink from '@/components/NavigationLink';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

type Props = {
  params: { locale: string };
};

const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
}

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('HomePage');
  const tNav = useTranslations('Navigation');

  return (
    <div>
      {/* First block */}
      <div className="flex justify-center items-start min-h-body pt-14">
        <div className="pr-20 pt-24">
          {/* Text */}
          <div className='flex flex-col items-center text-5xl space-y-5'>
            <div>{t('why')}</div>
            <div>{t('doYouNeed')}</div>
            <div>{t('myServices')}</div>
          </div>
          {/* Buttons */}
          <div className="flex flex-col items-center pt-10 text-secondary">
            <NavigationLink
              href={'/correction'}
              className="content-center text-center w-52 h-16 border-b-2 border-secondary text-2xl font-light hover:h-10 hover:my-3"
            >
              {tNav('correction')}
            </NavigationLink>
            <NavigationLink
              href={'/biography'}
              className="content-center text-center w-52 h-16 border-b-2 border-secondary text-2xl font-light hover:h-10 hover:my-3"
            >
              {tNav('biography')}
            </NavigationLink>
            <NavigationLink
              href={'/interpretariat'}
              className="content-center text-center w-52 h-16 border-b-2 border-secondary text-2xl font-light hover:h-10 hover:my-3"
            >
              {tNav('interpretariat')}
            </NavigationLink>
          </div>
        </div>
        {/* Image */}
        <div className="w-[450px] h-[675px] relative">
          <Image src={'/home/1.JPG'} style={imageStyle} fill alt="Image one"></Image>
        </div>
      </div>

      {/* Second block */}
      <div className="flex justify-center items-center bg-primary min-h-body mt-20">
        <div className='grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-12 uppercase text-3xl text-secondary'>
          <div className='text-right self-center'>Confidentialité</div>
          <div className='text-7xl text-black'>CE QUI EST</div>
          <div className='text-right self-center'>Bienveillance</div>
          <div className='text-7xl text-black'>IMPORTANT</div>
          <div className='text-right self-center'>Confiance</div>
          <div className='text-7xl text-black'>POUR MOI</div>
        </div>
      </div>

      {/* Third block */}
      <div className='flex justify-center items-center pt-32 pb-52'>
        <div className='text-4xl pr-20'>Pour me lire, c&apos;est par ici !</div>
        <NavigationLink
              href={'/'}
              className="content-center text-center w-52 h-16 border-2 border-secondary text-secondary text-2xl font-light hover:h-10 hover:my-3"
            >
              MON BLOG
            </NavigationLink>
      </div>
    </div>
  );
}
